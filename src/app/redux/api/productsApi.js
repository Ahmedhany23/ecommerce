import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.base_URL}` }),
  endpoints: (builder) => ({
    getproducts: builder.query({
      query: (name) => `products`,
    }),
  }),
});
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.base_URL}` }),
  endpoints: (builder) => ({
    getcategories: builder.query({
      query: () => `categories`,
    }),
  }),
});
export const OneproductApi = createApi({
  reducerPath: "OneproductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.base_URL}` }),
  endpoints: (builder) => ({
    getOneProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});
export const productsApiByQuery = createApi({
  reducerPath: "productsApiByQuery",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.base_URL}` }),
  endpoints: (builder) => ({
    getproductsBy: builder.query({
      query: (query) => `products?query=${query}`,
    }),
  }),
});

export const { useGetcategoriesQuery } = categoriesApi;
export const { useGetproductsQuery } = productsApi;
export const { useGetOneProductQuery } = OneproductApi;
export const { useGetproductsByQuery } = productsApiByQuery;
