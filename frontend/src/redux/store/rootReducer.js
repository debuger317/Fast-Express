import { combineReducers } from "redux";
import { authSlice } from "../slice/authSlice";

export const rootReducer = combineReducers({
    auth:authSlice.reducer
})