import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState={
    loading:false,
    posts:[],
    post:[],
    alert:null

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
            return response.data.data;
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
export const updatePost=createAsyncThunk('community/updatePost',
    async(formData,{getState})=>{
        const token=getState().user.token
        const id=getState().community.post._id
        try{
            const response=await axios.put(`https://jobee-5pfw.onrender.com/api/posts/update/${id}`,
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
export const createPost=createAsyncThunk('community/createPost',
    async(formData,{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.post('https://jobee-5pfw.onrender.com/api/posts/create',
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
export const makeComment=createAsyncThunk('community/makeComment',
    async({data, id},{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.post(`https://jobee-5pfw.onrender.com/api/comments/${id}`,
                data,
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
export const makeLike=createAsyncThunk('community/makeLike',
    async({id},{getState})=>{
        const token=getState().user.token
        try{
            const response=await axios.post(`https://jobee-5pfw.onrender.com/api/likes/${id}`,
                {},
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
const communitySlice=createSlice({
    name:'community',
    initialState,
    reducers:{
        setAlert:(state,action)=>{
            state.alert=action.payload
            },
    },
    extraReducers:(builder)=>{
        builder
.addCase(getPosts.pending,(state)=>{
    state.loading=false
})
.addCase(getPosts.fulfilled,(state,action)=>{
    state.loading=false
    state.posts=action.payload
    state.alert=null
    
})
.addCase(getPosts.rejected,(state)=>{
    state.loading=false
    state.posts=[]
state.alert='failed'
})
.addCase(getPost.pending,(state)=>{
    state.loading=true
})
.addCase(getPost.fulfilled,(state,action)=>{
    state.loading=false
    state.post=action.payload
    state.alert=null
    
})
.addCase(getPost.rejected,(state)=>{
    state.loading=false
    state.post=[]
state.alert='failed'
})
.addCase(deletePost.pending,(state)=>{
    state.loading=true
})
.addCase(deletePost.fulfilled,(state)=>{
    state.loading=false
    state.alert=null
})
.addCase(deletePost.rejected,(state)=>{
    state.loading=false
state.alert='failed'

})
.addCase(updatePost.pending,(state)=>{
    state.loading=true
    state.alert=null

})
.addCase(updatePost.fulfilled,(state,action)=>{
    state.loading=false
    state.post=action
    state.alert=null
})
.addCase(updatePost.rejected,(state)=>{
    state.loading=false
    state.alert='failed'

})
.addCase(createPost.pending,(state)=>{
    state.loading=true
})
.addCase(createPost.fulfilled,(state)=>{
    state.loading=false
    state.alert=null
    state.alert=null
})
.addCase(createPost.rejected,(state)=>{
    state.loading=false
state.alert='failed'
})
.addCase(makeComment.pending,(state)=>{
    state.loading=true
})
.addCase(makeComment.fulfilled,(state)=>{
    state.loading=false
    state.alert=null

})
.addCase(makeComment.rejected,(state)=>{
    state.loading=false
state.alert='failed'
})
.addCase(makeLike.pending,(state)=>{
    state.loading=true
})
.addCase(makeLike.fulfilled,(state)=>{
    state.loading=false
    state.alert=null

})
.addCase(makeLike.rejected,(state)=>{
    state.loading=false
state.alert='failed'
})
    }
})
export default communitySlice.reducer
export const{setAlert}=communitySlice.actions