import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})