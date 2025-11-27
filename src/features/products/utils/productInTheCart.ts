
import { Product } from "@/generated/prisma/browser";
import { useCart } from "../store/useProductsStore";

export function productInTheCart(id: Product["id"]) {
  const cart = useCart();

  return cart.find((item) => item.id === id) || null;
}

 
