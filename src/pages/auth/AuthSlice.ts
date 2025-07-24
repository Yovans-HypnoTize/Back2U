import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/interceptors";

export interface LoginState {
    userInfo:any
    loading:boolean
}

const initialState: LoginState = {
    userInfo:{},
    loading:false,
}

export const requestLogin = createAsyncThunk<any, any>("login",async(data,{rejectWithValue}) => {
    try {
        const response = await axiosInstance.post("auth/login",data);
        return response
    } catch (error:any) {
        return rejectWithValue(error.message)
    }
})

export const loginSlice = createSlice({
    name:"login",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(requestLogin.pending, (state) => {
            state.loading = true
        })
        .addCase(requestLogin.fulfilled, (state,action) => {
            state.loading = false
            state.userInfo = action.payload
        })
    }
})

export default loginSlice.reducer