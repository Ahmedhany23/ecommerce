import api from "./api";

export async function getRecommend() {
  const { data } = await api("products?populate=*");
  return data;
}
