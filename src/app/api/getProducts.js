"use client";
import api from "./api";

export async function getProducts() {
  const { data } = await api("products?populate=*");
  return data.data;
}
export async function getProduct(id) {
  const { data } = await api(`products/${id}?populate=*`);
  return data;
}

