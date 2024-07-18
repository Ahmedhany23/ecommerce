"use client";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "../reducer/Auth/authReducer";
import { productsReducer } from "../reducer/productsReducer";

const reducers = combineReducers({
  authReducer,productsReducer
})

export const store = configureStore({
  reducer: reducers,
});