import{createAsyncThunk, createSlice}from'@reduxjs/toolkit'
import axios from 'axios';


const initialState={
    isLogined:false,
    userData:null,
    error:null,
    token:null,
    tracks:[]
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
    return response.data.token
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
    localStorage.setItem("signData",JSON.stringify(state.userData))
    location.replace('/select')
},
firstDataJunior:(state,action)=>{
    state.userData={...state.userData,...action.payload}
localStorage.setItem("firstJuniorData",JSON.stringify(state.userData));
// location.replace('/endJunior')
// state.userData=null
},

    },
    extraReducers: (builder) => {
        builder
        .addCase(sendData.pending, (state) => {
        state.isLogined = false;
        state.userData = null;
        state.error = null;
        })
        .addCase(sendData.fulfilled, (state,action) => {
        state.isLogined = true;
        state.userData=action.payload
location.replace('/')
        })
        .addCase(sendData.rejected, (state, action) => {
        state.isLogined = false;
        state.error = action.error.message;
        })
        .addCase(login.pending, (state) => {
            state.isLogined = false;
            state.userData = null;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
        state.isLogined = true;
        state.token=action.payload

location.replace('/')
        })
        .addCase(login.rejected, (state, action) => {
        state.isLogined = false;
        state.error = action.error.message;
        })

        
}
})
export default userSlice.reducer
export const{signUp,firstDataJunior}=userSlice.actions