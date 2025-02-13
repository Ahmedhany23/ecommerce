import axios from "axios";
import { PRODUCTS } from "../types/ecommerceType";

export const getProductsByCategorie = (query, from, to, sortBy) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${process.env.base_URL}products?query=${query}&from=${from}&to=${to}&sortBy=${sortBy}`);
    dispatch({ type: PRODUCTS, data: data });
  };
};
