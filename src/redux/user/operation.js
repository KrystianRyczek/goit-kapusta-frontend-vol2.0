import Axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


const axios = Axios.create({
    baseURL: 'http://localhost:3000/api'
  });



//Get all your info

export const userDetails = createAsyncThunk(
    'userDetails /fetchreUserDetails ', 
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/user',
        )
        return resp.data
})


//Update user's balance

export const setUserBalance = createAsyncThunk(
    'getUserBalance/fetchGetUserBalance', 
    async(newBalance,token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.patch('/user/balance',
            //newBalance
            {
                "newBalance": 1
            }
        )
        return resp.data
})
