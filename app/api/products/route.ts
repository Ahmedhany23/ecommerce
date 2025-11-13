import { getProducts } from "@/features/home/components/server/products";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: Request) {
  const products = await getProducts();

  return new Response(JSON.stringify(products));
}
