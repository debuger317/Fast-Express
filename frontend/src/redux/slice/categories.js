import { createSlice } from '@reduxjs/toolkit';

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        items: []

    },
    reducers: {
        setCategories: (state, action) => {
            state.items = action.payload

        },
        logOut: (state, action) => {
            state.userdetails = {}

        }
    },
})