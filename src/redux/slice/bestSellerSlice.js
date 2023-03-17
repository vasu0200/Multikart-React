import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {v4 as uuid} from "uuid"

const bestSellingSlice = createSlice({
    name: "Best selling",
    initialState: {
        value:[],
        status: "pending",
        error: null
    },
    reducers: {},
    extraReducers: builder => builder
    .addCase(fetchBestSeller.pending,(state,  action)=>{
        state.status = "pending";
    })
    .addCase(fetchBestSeller.rejected,(state,  action)=>{
        state.status = "rejected";
        state.error = action.payload;
    })
    .addCase(fetchBestSeller.fulfilled,(state,  action)=>{
        state.status = "fulfilled";
        state.value = action.payload
    })

});

export const fetchBestSeller = createAsyncThunk("BestSeller/fetch", async ()=>{
    const url = "https://res.cloudinary.com/dwdy4lewd/raw/upload/v1668789718/React%20Class/A.%20Jagadeesh/best_selling_q4qwmi.json"
    try{
        const {data} = await axios.get(url);
        return data.map(e => ({...e,id:uuid()}))

    }catch(error){
        return error.message
    }
})

export default bestSellingSlice;