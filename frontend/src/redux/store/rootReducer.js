import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { CategoriesSlice } from "../slice/categories";
import { dashboardSlice } from "../slice/dashboard";
import { merchantSlice } from "../slice/merchant";
import { usersSlice } from "../slice/users";
import { reviewSlice } from './../slice/review';

export const rootReducer = combineReducers({
    auth:authSlice.reducer,
    categories:CategoriesSlice.reducer,
    reviews:reviewSlice.reducer,
    users: usersSlice.reducer,
    merchant:merchantSlice.reducer,
    dashboard:dashboardSlice.reducer,
})