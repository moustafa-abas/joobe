import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState={
    loading:false,
    posts:[],
    post:[],
    error:null
}
export const getPosts=createAsyncThunk('community/getPosts',
    async(_,{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.get('https://jobee-5pfw.onrender.com/api/posts/all',{
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
export const getPost=createAsyncThunk('community/getPost',
    async({id},{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.get(`https://jobee-5pfw.onrender.com/api/posts/${id}`,{
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
export const deletePost=createAsyncThunk('community/deletePost',
    async({id},{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.delete(`https://jobee-5pfw.onrender.com/api/posts/${id}`,{
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
// export const updatePost=createAsyncThunk('community/updatePost',
//     async(id,data,{getState})=>{
//         const token=getState().user.token
//         try{
//             const response=await axios.delete(`https://jobee-5pfw.onrender.com/api/posts/update/${id}`,
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
export const createPost=createAsyncThunk('community/createPost',
    async(data1,{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.post('https://jobee-5pfw.onrender.com/api/posts/create',
                data1,
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
const communitySlice=createSlice({
    name:'community',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
.addCase(getPosts.pending,(state)=>{
    state.loading=true
})
.addCase(getPosts.fulfilled,(state,action)=>{
    state.loading=false
    state.posts=action.payload
    state.error=null
    console.log(state.posts)
    
})
.addCase(getPosts.rejected,(state,action)=>{
    state.loading=false
    state.posts=[]
    state.error=action.payload
})
.addCase(getPost.pending,(state)=>{
    state.loading=true
})
.addCase(getPost.fulfilled,(state,action)=>{
    state.loading=false
    state.post=action.payload
    state.error=null
    console.log(state.post)
    
})
.addCase(getPost.rejected,(state,action)=>{
    state.loading=false
    state.post=[]
    state.error=action.payload
})
.addCase(deletePost.pending,(state)=>{
    state.loading=true
})
.addCase(deletePost.fulfilled,(state)=>{
    state.loading=false
    state.error=null
})
.addCase(deletePost.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
})
// .addCase(updatePost.pending,(state)=>{
//     state.loading=true
// })
// .addCase(updatePost.fulfilled,(state,action)=>{
//     state.loading=false
//     state.posts=action.payload
//     state.post=[]
//     state.error=null
// })
// .addCase(updatePost.rejected,(state,action)=>{
//     state.loading=false
//     state.error=action.payload
// })
.addCase(createPost.pending,(state)=>{
    state.loading=true
})
.addCase(createPost.fulfilled,(state)=>{
    state.loading=false
    state.error=null
})
.addCase(createPost.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
})
    }
})
export default communitySlice.reducer