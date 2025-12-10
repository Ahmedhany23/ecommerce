"use client";

import { Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export const useGetProducts = () => {
  const searchParams = useSearchParams();

  const categoriesParam = searchParams.get("categories") || "";
  const minParam = searchParams.get("min") || "";
  const maxParam = searchParams.get("max") || "";
  const searchParam = searchParams.get("search") || "";

  const queryString = new URLSearchParams({
    ...(categoriesParam && { categories: categoriesParam }),
    ...(minParam && { min: minParam }),
    ...(maxParam && { max: maxParam }),
    ...(searchParam && { search: searchParam }),
  }).toString();

  const { data, isLoading } = useQuery<{ products: Product[] }>({
    queryKey: [
      "products",
      { categoriesParam, minParam, maxParam, searchParam },
    ],
    queryFn: async () => {
      const res = await fetch(`/api/products?${queryString}`);
      return res.json();
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });

  return { products: data?.products || [], isLoading };
};
