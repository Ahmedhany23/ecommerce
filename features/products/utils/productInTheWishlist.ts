import { Product } from "@prisma/client";

export const productInTheWishlist = (
  id: Product["id"],
  wishlist: Product[],
) => {
  return wishlist.find((item) => item.id === id) || null;
};
