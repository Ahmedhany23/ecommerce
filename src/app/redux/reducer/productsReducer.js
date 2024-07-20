
import Product from "@/app/(routes)/products/page";
import { PRODUCTS, CATEGORIES,SearchByTitle,ProductByCategorie } from "../types/ecommerceType";

const initialValue = { data: { products: [], product:[], categories: [] ,searchProduct:[]  } };

export const productsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, data: { ...state.data, products: action.data } };
    case CATEGORIES:
      return { ...state, data: { ...state.data, categories: action.data } };
    case SearchByTitle:
      return { ...state, data: { ...state.data, products: action.data } };
    case ProductByCategorie:
      return { ...state, data: { ...state.data, product: action.data } };
    default:
      return state;
  }
};
