import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userdetails: {
        }    
    },
    reducers: {
        googleAuth: (state, action) => {
            state.userdetails = action.payload
        },
        logOut: (state, action) => {
            state.userdetails = {}

        }
    },
})
