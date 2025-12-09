import { Product } from "@/src/generated/prisma/browser";
import { CartItem } from "../store/useProductsStore";

export function productInTheCart(id: Product["id"], cart: CartItem[]) {
  return cart?.find((item) => item.productId === id) || null;
}
