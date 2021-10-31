import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        backtohome: "",
        openmenu: false ,
    },
    reducers: {
        BacktoHome: (state, action) => {
            state.backtohome = action.payload

        },
        openMenu: (state, action) => {
            state.openmenu = action.payload

        },

    },
})
