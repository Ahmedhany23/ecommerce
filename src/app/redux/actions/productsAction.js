import api from "../api/api";
import { CATEGORIES, PRODUCTS } from "../types/ecommerceType";

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await api("products?populate=*");
    dispatch({ type: PRODUCTS, data: data.data });
  };
};
export const getProduct = (id) => {
  return async (dispatch) => {
    const { data } = await api(`products/${id}?populate=*`);
    dispatch({ type: PRODUCTS, data: data.data });
  };
};
export const getCategories = () => {
  return async (dispatch) => {
    const { data } = await api("categories?populate=*");
    dispatch({ type: CATEGORIES, data: data.data });
  };
};
