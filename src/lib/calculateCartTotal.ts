import { CartItem } from "../features/products/store/useProductsStore";

function calculateCartTotal(cart: CartItem[]) {
  return cart.reduce(
    (acc, item) => acc + item.product.price * (item.quantity || 1),
    0,
  );
}

export default calculateCartTotal;
