import{createAsyncThunk, createSlice}from'@reduxjs/toolkit'
import axios from 'axios';


const initialState={
    loading:false,
    isLogined:false,
    userData:null,
    error:null,
    token:null,
    rule:null
}

export const sendData = createAsyncThunk(
"user/sendData",
async (all) => {
    try {
   const response = await axios.post(
        "https://jobee-5pfw.onrender.com/api/student/auth/register",
     all
    );
    return response.data;
    } catch (error) {
    throw new Error(error.message);
    }
}
);
export const login = createAsyncThunk(
"user/login",
async (data) => {
    try {
   const response = await axios.post(
        "https://jobee-5pfw.onrender.com/api/student/auth/login",
        data
    );
    return response.data
    } catch (error) {
    throw new Error(error.message);
    }
}
);

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
signUp:(state,action)=>{
    state.userData=action.payload
    location.replace('/select')
},
firstDataJunior:(state,action)=>{
    state.userData={...state.userData,...action.payload}
location.replace('/endJunior')
},
logOut:(state)=>{
    state.loading=false
    state.userData=null
    state.isLogined=false
    location.replace('/')
    console.log(state.isLogined)
}

    },
    extraReducers: (builder) => {
        builder
        .addCase(sendData.pending, (state) => {
            state.loading=true
        })
        .addCase(sendData.fulfilled, (state,action) => {
            state.loading=false
        state.isLogined = true;
        state.userData={...state.userData,...action.payload}
        state.token=action.payload
location.replace('/')
        })
        .addCase(sendData.rejected, (state, action) => {
            state.loading=false
        state.error = action.error.message;
        })
        .addCase(login.pending, (state) => {
            state.loading=true
            
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading=false
        state.isLogined = true;
        state.userData=action.payload.data
        state.token=action.payload.token
        state.rule=action.payload.rule
        state.error=null
location.replace('/')
        })
        .addCase(login.rejected, (state, action) => {
            state.loading=false
        state.error = action.error.message;
        })
    
}
})
export default userSlice.reducer
export const{signUp,firstDataJunior,logOut}=userSlice.actions