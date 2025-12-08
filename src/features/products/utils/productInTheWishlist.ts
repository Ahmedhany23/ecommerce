import { Product } from "@/generated/prisma/browser";

export const productInTheWishlist = (
  id: Product["id"],
  wishlist: Product[],
) => {
  return wishlist.find((item) => item.id === id) || null;
};
