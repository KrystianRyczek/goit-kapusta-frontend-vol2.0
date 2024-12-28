import Axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const axios = Axios.create({
    baseURL: 'http://localhost:3000/api'
  });
const token = (state)=>state.store.token
axios.defaults.headers.common.Authorization = `Bearer ${token}`

//User registration
export const addUser = createAsyncThunk(
    'addUser/fetchaAddUser', 

    async(newUser) => {
        const resp = await axios.post('/auth/register',
            newUser
            // {
            //     "username": username,
            //     "email": email,
            //     "password": password
            // }
        )
        return resp.data
})

///User authentication
// export const signInUser = createAsyncThunk(
//     'signIn/fetchSignIn',
//     async(user) => {
//         const resp = await axios.post('/auth/login',
//             //user
//             {
//                 "email": "user0@example.com",
//                 "password": "qwerty123!"
//             }
//         )
//         return resp.data
// })

export const signInUser = createAsyncThunk(
    'signIn/fetchSignIn', 
    async(user) => {
        const resp = await axios.post('/auth/login',
            user
            // {
            //     "email": "user00@example.com",
            //     "password": "qwerty123!"
            // }
        )
        return resp.data
})

//Logout
export const signOutUser = createAsyncThunk(
    'signOut/fetchSignOut', 
    
    async(token) => {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.post('/auth/logout')
        return resp
})

//Not implemented - Get new pair of tokens (use Bearer {refreshToken} instead of accessToken)

export const refreshUserToken = createAsyncThunk(
    'refreshUserToken/fetchRefreshUserToken', 
    async(sessionsId, refreshToken) => {
        axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`
        const resp = await axios.post('/auth/refresh',

            //sessionsId
            {
                "sid": "sadfasgergrshbsbdgjyujtyhsrtggsegsrtg"
            }
        )
        return resp
})

//Google authentication. WARNING: Works only for sign-in, after registered on front-end (if you're writing your back-end for a SPECIFIC front-end, then you can configure it right to work both for sign-up & sign-in)
