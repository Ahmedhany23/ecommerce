import { Product } from "@/components/types/product";
import { cache } from "react";

const allUrl = require("@/configs/allUrl.json");

export const getProducts = cache(async (): Promise<Product[]> => {
  const res = await fetch(`${allUrl.mockApi}/product`, {
    cache: "force-cache",
  });
  return res.json();
});
