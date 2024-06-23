import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    jobs:[],
    job:[],
    error:null

}
export const getJobs=createAsyncThunk('jobs/getJobs',
    async(_,{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.get('https://jobee-5pfw.onrender.com/api/jobs/all',
                {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
            )
            return response.data;
        }
        catch(error){
throw new Error(error.message)
        }
    }
);
// export const deleteJob=createAsyncThunk('jobs/deleteJob',
//     async(id,{getState})=>{
//         const token=getState().user.token
//         try{
//             const response=await axios.delete(`https://jobee-5pfw.onrender.com/api/jobs/${id}`,{
//                 headers:{
//                     Authorization:`Bearer ${token}`
//                 }
//             }
//             )
//             return response.data;
//         }
//         catch(error){
// throw new Error(error.message)
//         }
//     }
// );
// export const updateJob=createAsyncThunk('jobs/updateJob',
//     async(id,data,{getState})=>{
//         const token=getState().user.token
//         try{
//             const response=await axios.delete(`https://jobee-5pfw.onrender.com/api/jobs/update/${id}`,
//                 data,
//                 {
//                 headers:{
//                     Authorization:`Bearer ${token}`
//                 }
//             }
//             )
//             return response.data;
//         }
//         catch(error){
// throw new Error(error.message)
//         }
//     }
// );
// export const createJob=createAsyncThunk('jobs/createJob',
//     async(data,{getState})=>{
//         const token=getState().user.token
//         try{
//             const response=await axios.post('https://jobee-5pfw.onrender.com/api/jobs/create',
//                 data,
//                 {
//                 headers:{
//                     Authorization:`Bearer ${token}`
//                 }
//             }
//             )
//             return response.data;
//         }
//         catch(error){
// throw new Error(error.message)
//         }
//     }
// );
// export const getJob=createAsyncThunk('jobs/getJob',
//     async(id,{getState})=>{
//         const token=getState().user.token
//         try{
//             const response=await axios.get(`https://jobee-5pfw.onrender.com/api/jobs/${id}`,{
//                 headers:{
//                     Authorization:`Bearer ${token}`
//                 }
//             }
//             )
//             return response.data;
//         }
//         catch(error){
// throw new Error(error.message)
//         }
//     }
// );
const jobsSlice =createSlice({
    name:'jobs',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getJobs.pending,(state)=>{
            state.loading=true
        })
        .addCase(getJobs.fulfilled,(state,action)=>{
            state.loading=false
            state.jobs=action.payload
            state.error=null
        })
        .addCase(getJobs.rejected,(state,action)=>{
            state.loading=false
            state.jobs=[]
            state.error=action.payload
        })
        // .addCase(deleteJob.pending,(state)=>{
        //     state.loading=true
        // })
        // .addCase(deleteJob.fulfilled,(state,action)=>{
        //     state.loading=false
        //     state.jobs=action.payload
        //     state.error=null
        // })
        // .addCase(deleteJob.rejected,(state,action)=>{
        //     state.loading=false
        //     state.error=action.payload
        // })
        // .addCase(updateJob.pending,(state)=>{
        //     state.loading=true
        // })
        // .addCase(updateJob.fulfilled,(state,action)=>{
        //     state.loading=false
        //     state.jobs=action.payload
        //     state.error=null
        // })
        // .addCase(updateJob.rejected,(state,action)=>{
        //     state.loading=false
        //     state.error=action.payload
        // })
        // .addCase(createJob.pending,(state)=>{
        //     state.loading=true
        // })
        // .addCase(createJob.fulfilled,(state,action)=>{
        //     state.loading=false
        //     state.jobs=action.payload
        //     state.error=null
        // })
        // .addCase(createJob.rejected,(state,action)=>{
        //     state.loading=false
        //     state.error=action.payload
        // })
        // .addCase(getJob.pending,(state)=>{
        //     state.loading=true
        // })
        // .addCase(getJob.fulfilled,(state,action)=>{
        //     state.loading=false
        //     state.job=action.payload
        //     state.error=null
        // })
        // .addCase(getJob.rejected,(state,action)=>{
        //     state.loading=false
        //     state.job=[]
        //     state.error=action.payload
        // })
    }
})
export default jobsSlice.reducer
