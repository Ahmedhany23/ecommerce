import { Product } from "@/src/components/types/product";

export function productInTheCart(id: Product["id"], cart: Product[]) {
  return cart.find((item) => item.id === id) || null;
}
