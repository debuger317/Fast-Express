import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { CategoriesSlice } from "../slice/categories";

import { dashboardSlice } from "../slice/dashboard";

import { merchantSlice } from "../slice/merchant";

export const rootReducer = combineReducers({
    auth:authSlice.reducer,
    categories:CategoriesSlice.reducer,

    merchant:merchantSlice.reducer,
    dashboard:dashboardSlice.reducer,


})