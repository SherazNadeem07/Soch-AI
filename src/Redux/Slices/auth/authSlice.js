import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'https://dummyjson.com'

export const loginUser = createAsyncThunk('auth/loginUser', async(credentials, thunkAPI)=>{
    try{
        const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
        return response.data;
    }
    catch(error){
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login Failed')
    }
});

const initialState ={
    user: null,
    token: null,
    loading:false,
    error:null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers:(builder)=>{
     builder
     .addCase(loginUser.pending,(state)=>{
        state.loading=true;
        state.error=null;
     })
     .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading=false;
        state.user=action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token',action.payload.token);
     })
     .addCase(loginUser.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
     });
    },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
