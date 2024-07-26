

import { PRODUCTS} from "../types/ecommerceType";

const initialValue = { data: { products: [], product:[], categories: [] ,searchProduct:[]  } };

export const productsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case PRODUCTS:
      return { ...state, data: { ...state.data, products: action.data } };
    default:
      return state;
  }
};
