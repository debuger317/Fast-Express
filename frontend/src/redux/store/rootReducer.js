import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { CategoriesSlice } from "../slice/categories";

import { dashboardSlice } from "../slice/dashboard";

import { merchantSlice } from "../slice/merchant";

import { userOrderSlice } from '../slice/userOrderListsSlice';
import { reviewSlice } from './../slice/review';

export const rootReducer = combineReducers({
    auth:authSlice.reducer,
    categories:CategoriesSlice.reducer,
    reviews:reviewSlice.reducer,
    user: userOrderSlice.reducer,
    merchant:merchantSlice.reducer,
    dashboard:dashboardSlice.reducer,
})