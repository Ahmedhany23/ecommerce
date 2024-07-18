import api from "@/app/api/api";
import { CATEGORIES, PRODUCTS, SearchByTitle } from "../types/ecommerceType";

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
export const getSearchBytitle = (query) => {
  return async (dispatch) => {
    const { data } = await api(
      `products?filters[$or][0][description][$contains]=${query}&filters[$or][1][Brand][$contains]=${query}&populate=*`
    );

    dispatch({ type: SearchByTitle, data: data.data });
  };
};
