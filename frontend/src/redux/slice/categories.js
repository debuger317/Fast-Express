import { createSlice } from '@reduxjs/toolkit';

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        items :[],    
    },
    reducers: {
        setCategories: (state, action) => {
            state.items = action.payload

        },

        removeCategories: (state, action) => {
        return    state.items.filter((item) => item._id !== action.payload)

        }

    },
})