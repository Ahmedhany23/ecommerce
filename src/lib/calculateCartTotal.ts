import { Product } from "@/generated/prisma/browser";

 function calculateCartTotal(cart: Product[]) {
  return cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
}

export default calculateCartTotal

