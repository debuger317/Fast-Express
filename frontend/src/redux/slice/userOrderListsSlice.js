import { createSlice } from "@reduxjs/toolkit";

export const userOrderSlice = createSlice({
    name: 'userOrderLists',
    initialState: {
        userOrderLists: []
    },
    reducers: {
        userorderlists: (state,action) =>{
            state.userOrderLists = action.payload
            
        }        
    }
})