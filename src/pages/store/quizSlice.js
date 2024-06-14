import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
loading:false,
quizzesData:[],
error:'',
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
    return await axios.get('https://jobee-5pfw.onrender.com/api/exam/all',{     
        headers: {
            Authorization : `Bearer ${token}`
        }})
        .then(response => ( response.data.data)
    )
})

export const submitQuiz = createAsyncThunk(
"quizzes/submitQuiz",
async (answers ,{getState}) => {
    const token = getState().user.token;
    const currentQuiz = getState().quizzes.currentQuiz;
    const id = getState().quizzes.quizzesData[currentQuiz]._id;
    console.log(id)
    console.log(answers)
    return await axios.post(`https://jobee-5pfw.onrender.com/api/exam/submit/${id}`,
    answers,
    {     
        headers: {
            Authorization : `Bearer ${token}`
        }})
            .then(response => ( response.data.data.score))
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
        state.quizzesData=action.payload
    })
    .addCase(fetchQuizData.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
    .addCase(submitQuiz.pending,(state)=>{
        state.loading=true
    })
    .addCase(submitQuiz.fulfilled,(state,action)=>{
        state.loading=false
        state.score=action.payload
state.currentQuiz++
state.currentQuestion=0
state.finishQuestion=false
location.replace('/quiz/result')

    })
    .addCase(submitQuiz.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload

// alert('try again later')
    })
}
})
export default quizSlice.reducer
export const {nextQuestion}=quizSlice.actions