import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../ApiService/ApiService";

/**
 * Thunk for making an api async call.
 * This thunk is a dummy thunk for now.
 * @param typePrefix
 * @param payloadCreator
 * @param options
 * @returns api response data
 */
export const dummyThunk = createAsyncThunk('dummy/api',async()=>{
    const res= await apiService.get('/todos/1')
    return res.data
})