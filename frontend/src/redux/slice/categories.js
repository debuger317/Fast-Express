import { createSlice } from '@reduxjs/toolkit';

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        items: [],
    },
    reducers: {
        setCategories: (state, action) => {
            state.items = action.payload

        },
        // 

        filterCategories: (state, action) => {

            state.items = state.items.filter((item) => item.name === action.payload);

        },

        removeCategories: (state, action) => {

            state.items = state.items.filter((item) => item._id !== action.payload);

        }

    },
})