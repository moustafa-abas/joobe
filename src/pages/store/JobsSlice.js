import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    jobs:[],
    job:[],
    error:false,
    companyJobs:[],
    savedJobs:[]

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
            return response.data
        }
        catch(error){
throw new Error(error.message)
        }
    }
);
export const getCompanyJobs=createAsyncThunk('jobs/getCompanyJobs',
    async(_,{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.get('https://jobee-5pfw.onrender.com/api/jobs/company/list',
                {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
            )
            return response.data
        }
        catch(error){
throw new Error(error.message)
        }
    }
);
export const bookMarkJob=createAsyncThunk('jobs/bookMarkJob',
    async({id},{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.post(`https://jobee-5pfw.onrender.com/api/jobs/bookmark/${id}`,
                {},{
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
export const replayForApply=createAsyncThunk('jobs/replayForApply',
    async({id,answer},{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.post(`https://jobee-5pfw.onrender.com/api/jobs/change-stauts/${id}`,
                {answer},{
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
export const deleteJob=createAsyncThunk('jobs/deleteJob',
    async({id},{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.delete(`https://jobee-5pfw.onrender.com/api/jobs/${id}`,{
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
export const createJob=createAsyncThunk('jobs/createJob',
    async(data,{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.post('https://jobee-5pfw.onrender.com/api/jobs/create',
                data,
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
export const getJob=createAsyncThunk('jobs/getJob',
    async({id},{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.get(`https://jobee-5pfw.onrender.com/api/jobs/${id}`,{
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
// export const getCompanyJob=createAsyncThunk('jobs/getCompanyJob',
//     async({id},{getState})=>{
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
export const applyJob=createAsyncThunk('jobs/applyJob',
    async(formData,{getState})=>{
        const token=getState().user.token
        const id=getState().jobs.job?._id
        try{
            const response=await axios.post(`https://jobee-5pfw.onrender.com/api/jobs/apply/${id}`,
                formData,
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
            state.error=false
        })
        .addCase(getJobs.rejected,(state)=>{
            state.loading=false
            state.jobs=[]
            state.error=true
        })

        .addCase(deleteJob.pending,(state)=>{
            state.loading=true
        })
        .addCase(deleteJob.fulfilled,(state,action)=>{
            state.loading=false
            state.jobs=action.payload
            state.error=false
        })
        .addCase(deleteJob.rejected,(state)=>{
            state.loading=false
            state.error=true
        })
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
        .addCase(createJob.pending,(state)=>{
            state.loading=true
        })
        .addCase(createJob.fulfilled,(state)=>{
            state.loading=false
            state.error=false
            state.alert=true
            location.replace('/CompanyJobs')
        })
        .addCase(createJob.rejected,(state)=>{
            state.loading=false
            state.error=true

        })
        .addCase(getJob.pending,(state)=>{
            state.loading=true
        })
        .addCase(getJob.fulfilled,(state,action)=>{
            state.loading=false
            state.job=action.payload.data
            location.replace('/jobs/applyJob')
            state.error=false
        })
        .addCase(getJob.rejected,(state)=>{
            state.loading=false
            state.job=[]
            state.error=true
        })
        .addCase(getCompanyJobs.pending,(state)=>{
            state.loading=true
        })
        .addCase(getCompanyJobs.fulfilled,(state,action)=>{
            state.loading=false
            state.companyJobs=action.payload.data
            state.error=false
        })
        .addCase(getCompanyJobs.rejected,(state)=>{
            state.loading=false
            state.companyJobs=[]
            state.error=false
        })
        .addCase(bookMarkJob.pending,(state)=>{
            state.loading=true
        })
        .addCase(bookMarkJob.fulfilled,(state)=>{
            state.loading=false
            state.error=false
        })
        .addCase(bookMarkJob.rejected,(state)=>{
            state.loading=false
            state.error=true
        })
        .addCase(replayForApply.pending,(state)=>{
            state.loading=true
        })
        .addCase(replayForApply.fulfilled,(state)=>{
            state.loading=false
            state.error=false
        })
        .addCase(replayForApply.rejected,(state)=>{
            state.loading=false
            state.error=true
        })
    }
})
export default jobsSlice.reducer
