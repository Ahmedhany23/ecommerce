import api from "./api";

export async function getBrands() {
  const { data } = await api("brands?populate=*");
  return data;
}
