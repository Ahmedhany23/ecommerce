"use client";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from '../cartslice/cartSlice'
import { productsReducer } from "../reducer/productsReducer";
import {
  categoriesApi,
  OneproductApi,
  productsApi,
  productsApiByQuery,
  mainImageApi
} from "../api/productsApi";



const reducers = combineReducers({
  carttt: cartReducer,
  productsReducer,
  [OneproductApi.reducerPath]: OneproductApi.reducer,
  [productsApiByQuery.reducerPath]: productsApiByQuery.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [mainImageApi.reducerPath]: mainImageApi.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(OneproductApi.middleware)
      .concat(productsApiByQuery.middleware)
      .concat(productsApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(mainImageApi.middleware)
});
setupListeners(store.dispatch);
