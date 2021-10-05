import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userEmail: ''
    },
    reducers: {
        googleAuth: (state, action) => {
            state.userEmail = action.payload.email
        }
    },
})
