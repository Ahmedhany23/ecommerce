import { Product } from "@prisma/client";
import { CartItem } from "../store/useProductsStore";

export function productInTheCart(id: Product["id"], cart: CartItem[]) {
  return cart?.find((item) => item.productId === id) || null;
}
