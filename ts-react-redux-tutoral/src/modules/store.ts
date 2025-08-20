import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./index"; // combineReducers 한 파일

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;