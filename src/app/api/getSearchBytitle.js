"use client";
import api from "./api";

export async function getSearchBytitle(query) {
  const { data } = await api(`products?filters[title][$contains]=${query}&populate=*`);
  return data;
}