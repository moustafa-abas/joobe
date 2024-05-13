import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
loading:false,
quizData:[],
error:'',
currentQuestion:0,
finishQuestion:false,
answers:[],
score:'0'
}
export const fetchQuizData=createAsyncThunk('fetchQuizData',async(token)=>{
return await axios.get('https://jobee-5pfw.onrender.com/api/exam',{     
    headers: {
        Authorization : `Bearer ${token}`
    }})
        .then(response => ( response.data.data))
})


export const submitQuiz = createAsyncThunk(
"quizzes/submitQuiz",
async (answers, { getState }) => {
    const token = getState().user.token;
    return await axios.post('https://jobee-5pfw.onrender.com/api/exam/submit',
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
if(state.currentQuestion < state.data.exam.length -1){
state.currentQuestion++
}else{
state.finishQuestion=true
console.log(state.answers)
}
    }
},
extraReducers:(builder)=>{
    builder.addCase(fetchQuizData.pending,(state)=>{
        state.loading=true
    })
    .addCase(fetchQuizData.fulfilled,(state,action)=>{
        state.loading=false
        state.quizData=action.payload
        state.error=''
    })
    .addCase(fetchQuizData.rejected,(state,action)=>{
        state.loading=false
        state.quizData=[]
        state.error=action.error.message
    })
    .addCase(submitQuiz.fulfilled,(state,action)=>{
        state.score=action.payload
location.replace('/quiz/result')

    })
    .addCase(submitQuiz.rejected,(state,action)=>{
state.error=action.payload
alert('try again later')
    })
}
})
export default quizSlice.reducer
export const {nextQuestion}=quizSlice.actions