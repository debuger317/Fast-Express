import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";
import { CategoriesSlice } from "../slice/categories";

export const rootReducer = combineReducers({
    auth:authSlice.reducer,
    categories:CategoriesSlice.reducer
})