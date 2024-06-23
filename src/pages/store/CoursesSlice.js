import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    courses:[],
    error:null,
}
export const getCourses=createAsyncThunk('courses/getCorses',
    async(_,{getState})=>{
        const token=getState().user.token
try{
    const response=await axios.get('https://jobee-5pfw.onrender.com/api/courses/all',
        {
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
    )
    return response.data
}catch(error){
    throw new Error(error.message)
}
    }
)
const coursesSlice=createSlice({
    name:'courses',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCourses.pending,(state)=>{
            state.loading=true
        })
        .addCase(getCourses.fulfilled,(state,action)=>{
            state.loading=false
            state.courses=action.payload
            state.error=null
        })
        .addCase(getCourses.rejected,(state,action)=>{
            state.loading=false
            state.courses=[]
            state.error=action.payload
        })
    }
})
export default coursesSlice.reducer