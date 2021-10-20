import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { CategoriesSlice } from "../slice/categories";

import { dashboardSlice } from "../slice/dashboard";

import { merchantSlice } from "../slice/merchant";

import { userOrderSlice } from '../slice/userOrderListsSlice';

export const rootReducer = combineReducers({
    auth:authSlice.reducer,
    categories:CategoriesSlice.reducer,
    user: userOrderSlice.reducer,
    merchant:merchantSlice.reducer,
    dashboard:dashboardSlice.reducer,
})