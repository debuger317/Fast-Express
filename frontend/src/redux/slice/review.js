import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        review: []
    },
    reducers: {
        fecthReview: (state, action) => {
            state.review = action.payload
        }
    }
})