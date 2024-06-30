import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
loading:false,
quizzesData:[],
error:false,
currentQuestion:0,
currentQuiz:0,
quizNumber:1,
finishQuestion:false,
answers:[],
score:'0'
}
export const fetchQuizData = createAsyncThunk('quizzes/fetchQuizData',
    async(_,{getState})=>{
    const token = getState().user.token;
    console.log(token)
    return await axios.get('https://jobee-5pfw.onrender.com/api/exam',{     
        headers: {
            Authorization : `Bearer ${token}`
        }})
        .then(response => ( response.data)
    )
})

export const submitQuiz = createAsyncThunk(
"quizzes/submitQuiz",
async (_,{getState}) => {
    const token = getState().user.token;
    const currentQuiz = getState().quizzes.currentQuiz;
    const id = getState().quizzes.quizzesData[currentQuiz]._id;
    const answers = getState().quizzes.answers;
    return await axios.post(`https://jobee-5pfw.onrender.com/api/exam/submit/${id}`,
    {answers},
    {     
        headers: {
            Authorization : `Bearer ${token}` 
        }})
            .then(response => ( response.data))
    })       

const quizSlice=createSlice({
name:'quizzes',
initialState,
reducers:{
    nextQuestion:(state,action)=>{
        state.answers=[...state.answers,{...action.payload}]
if(state.currentQuestion < state.quizzesData[state.currentQuiz].exam.length -1){
state.currentQuestion++
}else{
state.finishQuestion=true  
}
    }
},
extraReducers:(builder)=>{
    builder.addCase(fetchQuizData.pending,(state)=>{
        state.loading=true
    })
    .addCase(fetchQuizData.fulfilled,(state,action)=>{
        state.loading=false
        state.quizzesData=action.payload.data
        state.error=false
    })
    .addCase(fetchQuizData.rejected,(state)=>{
        state.loading=false
        state.error=true
        state.quizzesData=[]
    })
    .addCase(submitQuiz.pending,(state)=>{
        state.loading=true
    })
    .addCase(submitQuiz.fulfilled,(state,action)=>{
        state.error=false
        state.loading=false
        location.replace('/quiz/result')
        state.score=state.score + action.payload.data.score
state.currentQuiz=state.currentQuiz +1
state.currentQuestion=0
state.answers=[]
state.finishQuestion=false

    })
    .addCase(submitQuiz.rejected,(state,)=>{
        state.loading=false
        state.error=true
    })
}
})
export default quizSlice.reducer
export const {nextQuestion}=quizSlice.actions