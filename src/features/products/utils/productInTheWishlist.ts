
import { Product } from "@/generated/prisma/browser";
import { useWishlist } from "../store/useProductsStore";

export const productInTheWishlist = (id: Product["id"]) => {
  const wishlist = useWishlist();

  return wishlist.find((item) => item.id === id) || null;
};
