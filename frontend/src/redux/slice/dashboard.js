import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
      backtohome: "",
    },
    reducers: {
        BacktoHome: (state, action) => {
            state.backtohome = action.payload

        },
       
    },
})
