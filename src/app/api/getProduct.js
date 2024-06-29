import api from "./api";

export async function getProduct(id) {
    const { data } = await api("products?populate=*");
    return data;
}
