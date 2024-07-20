import axios from "axios";
import { CATEGORIES, ProductByCategorie, PRODUCTS, SearchByTitle } from "../types/ecommerceType";

const base_URL = "http://localhost:8080/"

export const getProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:8080/" + `products`)
    dispatch({ type: PRODUCTS, data: data });
  };
};
export const getProduct = (id) => {
  return async (dispatch) => {
    const { data } = axios.get(base_URL + `products/${id}`)
    dispatch({ type: PRODUCTS, data: data });
  };
};
export const getCategories = () => {
  return async (dispatch) => {
    const { data } = await axios.get(base_URL + 'categories')
    dispatch({ type: CATEGORIES, data: data});
  };
};
export const getSearchBytitle = (query) => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:8080/" + `products?query=${query}` );
    dispatch({ type: PRODUCTS, data: data });
  };
};
export const getProductsByCategorie = (query,from,to) => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:8080/" + `products?query=${query}&from=${from}&to=${to}` );
    dispatch({ type: PRODUCTS, data: data });
  };
};
