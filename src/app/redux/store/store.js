"use client";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authReducer } from "../reducer/Auth/authReducer";
import { productsReducer } from "../reducer/productsReducer";
import {
  categoriesApi,
  OneproductApi,
  productsApi,
  productsApiByQuery,
} from "../api/productsApi";
const reducers = combineReducers({
  authReducer,
  productsReducer,
  [OneproductApi.reducerPath]: OneproductApi.reducer,
  [productsApiByQuery.reducerPath]: productsApiByQuery.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(OneproductApi.middleware)
      .concat(productsApiByQuery.middleware)
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware),
});
setupListeners(store.dispatch);
