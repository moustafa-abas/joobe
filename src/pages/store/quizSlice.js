import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
 const initialState={
    loading:false,
    data:[],
    error:'',
    currentQuestion:0
 }
 export const fetchQuizData=createAsyncThunk('quizData',async()=>{
    return await axios.get('https://jobee-5pfw.onrender.com/api/exam',{     
        headers: {
            Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJuZXczVXNlcjRAZ21haWwuY29tIiwiaWF0IjoxNzEzODEwMzcyLCJleHAiOjE3MTY0MDIzNzJ9.7Y0QpPKDz4cieMVXRpRCid8QIS-YRowJgLuyQEOLcFs'
        }})
            .then(response => ( response.data.data))

 })
 const quizSlice=createSlice({
    name:'Quizzes',
    initialState,
    reducers:{
        nextQuestion:(state)=>{
if(state.currentQuestion < state.data.exam.length -1){
    state.currentQuestion++
    // console.log(state.currentQuestion)
    localStorage.setItem('currentQuestion',state.currentQuestion)
}else{
    location.replace('/quiz/result')
}
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchQuizData.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchQuizData.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=''
        })
        .addCase(fetchQuizData.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
    }
 })
 export default quizSlice.reducer
 export const {nextQuestion}=quizSlice.actions