import { PRODUCTS, CATEGORIES } from "../types/ecommerceType";

const initialValue = { data: { products: [], categories: []  } };

export const productsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, data: { ...state.data, products: action.data } };
    case CATEGORIES:
      return { ...state, data: { ...state.data, categories: action.data } };
    default:
      return state;
  }
};
