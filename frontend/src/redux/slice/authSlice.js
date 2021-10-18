import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authdetails: {
            
        },
    },
    reducers: {
        googleAuth: (state, action) => {
            state.authdetails = action.payload

        },
        customAuth: (state, action) => {
            state.authdetails = action.payload

        },
        merchnatAuth: (state, action) => {
            state.authdetails = action.payload
        },
        logOut: (state, action) => {
            state.authdetails = {}

        }
    },
})
