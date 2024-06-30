import{createAsyncThunk, createSlice}from'@reduxjs/toolkit'
import axios from 'axios';


const initialState={
    loading:false,
    isLogined:false,
    userData:null,
    error:false,
    token:null,
    rule:null,
    tracks:null,
    alert:null,
    id:null
}

export const getTracks = createAsyncThunk(
"user/getTracks",
async () => {
    try {
   const response = await axios.get(
        "https://jobee-5pfw.onrender.com/api/tracks",
    );
    return response.data;
    } catch (error) {
    throw new Error(error.message);
    }
}
);
export const sendData = createAsyncThunk(
"user/sendData",
async (data) => {
    try {
   const response = await axios.post(
        "https://jobee-5pfw.onrender.com/api/student/auth/register",
     data
    );
    return response.data;
    } catch (error) {
    throw new Error(error.message);
    }
}
);
export const signCompany = createAsyncThunk(
"user/signCompany",
async (all) => {
    try {
   const response = await axios.post(
        "https://jobee-5pfw.onrender.com/api/company/auth/register",
     all
    );
    return response.data
    } catch (error) {
    throw new Error(error.message);
    }
}
);
export const signInstructor = createAsyncThunk(
"user/signInstructor",
async (all) => {
    try {
   const response = await axios.post(
        "https://jobee-5pfw.onrender.com/api/mentor/auth/register",
     all
    );
return response.data;
    } catch (error) {
    throw new Error(error.message);
    }
}
);
export const editData = createAsyncThunk(
"user/edit",
async (all,{getState}) => {
    const id=getState().user.userData._id
    const token=getState().user.token
    console.log(id)
    console.log(token)
    try {
   const response = await axios.put(
        `https://jobee-5pfw.onrender.com/api/student/${id}`,
     all,{
        headers:{
            Authorization:`Bearer ${token}`
        }
     }
    );
    console(response.data)
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
firstDataInstructor:(state,action)=>{
    state.userData={...state.userData,...action.payload}
location.replace('/endInstructor')
},
logOut:(state)=>{
    state.loading=false
    state.userData=null
    state.isLogined=false
    state.rule=null
    state.token=null
    location.replace('/')
},

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
        state.token=action.payload.token
        state.error=false
        state.id=action.payload.studentId
location.replace('/')
        })
        .addCase(sendData.rejected, (state) => {
            state.loading=false
        state.error = true;
        })
        .addCase(signInstructor.pending, (state) => {
            state.loading=true
        })
        .addCase(signInstructor.fulfilled, (state,action) => {
            state.loading=false
        state.isLogined = true;
        state.userData=action.payload.mentor
        state.token=action.payload.token
        state.rule='mentor'
        state.error=false
location.replace('/')
        })
        .addCase(signInstructor.rejected, (state) => {
            state.loading=false
        state.error = true;
        })
        .addCase(signCompany.pending, (state) => {
            state.loading=true
        })
        .addCase(signCompany.fulfilled, (state,action) => {
            state.loading=false
        state.isLogined = true;
        state.userData=action.payload.company
        state.token=action.payload.token
        state.rule='company'
        state.error=false
location.replace('/')
        })
        .addCase(signCompany.rejected, (state) => {
            state.loading=false
        state.error = true;
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
        state.error=false
location.replace('/')
        })
        .addCase(login.rejected, (state) => {
            state.loading=false
        state.error = true;
        })
        .addCase(getTracks.pending, (state) => {
            state.loading=true
        })
        .addCase(getTracks.fulfilled, (state, action) => {
            state.loading=false
            state.tracks=action.payload[0].tracks
        state.error=false
        })
        .addCase(getTracks.rejected, (state) => {
            state.loading=false
        })
    
}
})
export default userSlice.reducer
export const{signUp,firstDataJunior,logOut,firstDataInstructor}=userSlice.actions