"use client";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "../reducer/Auth/authReducer";

const reducers = combineReducers({
  authReducer
})

export const store = configureStore({
  reducer: reducers,
});