import { createSlice } from "@reduxjs/toolkit";

export const merchantSlice = createSlice({
    name: 'merchant',
    initialState: {
        filtercount: 0,
        filterName:'',
        selectedMerchant:{}
    },
    reducers: {
        updatedCount: (state,action) =>{
            state.filtercount = action.payload
            
        },
        filtername: (state,action) =>{
            state.filterName = action.payload
            
        },
        selectedMerchant:(state,action) =>{
            state.selectedMerchant = action.payload
        }
    }
})