import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        userOrderLists: [],
        parcelPhotoUrl:"",
        payment:"",
        userlist: {}
    },
    reducers: {
        paymentType: (state, action) => {
            state.payment = action.payload
        },
        userlist:(state, action)=>{
            state.userlist = action.payload
        },
        PhotoUrl:(state, action)=>{
            state.parcelPhotoUrl = action.payload
        },
        userorderlists: (state,action) =>{
            state.userOrderLists = action.payload
            
        },
        removeAUserFromUserlist:(state, action)=>{
            state.userlist = ""
        },       
    }
})