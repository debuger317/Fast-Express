import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userdetails: {
            
        },
        merchantdetails:{

        }
    },
    reducers: {
        googleAuth: (state, action) => {
            state.userdetails = action.payload

        },
        customAuth: (state, action) => {
            state.userdetails = action.payload

        },
        merchnatAuth: (state, action) => {
            state.merchantdetails = action.payload
        },
        logOut: (state, action) => {
            state.userdetails = {}

        }
    },
})
