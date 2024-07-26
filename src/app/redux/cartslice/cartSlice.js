"use client";
import { createSlice } from "@reduxjs/toolkit";

// A helper function to safely access localStorage
const getLocalStorageData = (key, defaultValue) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedData = window.localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  }
  return defaultValue;
};

const initialState = {
  selectedProducts: getLocalStorageData("selectedProducts", []),
  selectedProductsID: getLocalStorageData("selectedProductsID", []),
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productWithQuantity);
      state.selectedProductsID.push(productWithQuantity.id);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "selectedProducts",
          JSON.stringify(state.selectedProducts)
        );
        window.localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }
    },

    increaseQuantity: (state, action) => {
      const increaseProduct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      increaseProduct.quantity += 1;

      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "selectedProducts",
          JSON.stringify(state.selectedProducts)
        );
      }
    },

    decreaseQuantity: (state, action) => {
      const decreaseQuantity = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });
      decreaseQuantity.quantity -= 1;
      if (decreaseQuantity.quantity === 0) {
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });
        const newArr1 = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });
        state.selectedProducts = newArr;
        state.selectedProductsID = newArr1;
      }
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "selectedProducts",
          JSON.stringify(state.selectedProducts)
        );
        window.localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }
    },

    deleteProduct: (state, action) => {
      const deleteProduct = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.selectedProducts = deleteProduct;
      state.selectedProductsID = state.selectedProductsID.filter((id) => id !== action.payload.id);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "selectedProducts",
          JSON.stringify(state.selectedProducts)
        );
        window.localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct } =
  counterSlice.actions;

export default counterSlice.reducer;
