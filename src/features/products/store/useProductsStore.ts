import { Product } from "@/generated/prisma/browser";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductsState = {
  cart: Product[];
  wishlist: Product[];
  increment: (id: Product["id"]) => void;
  decrement: (id: Product["id"]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: Product["id"]) => void;
  toggleWishlistProduct: (product: Product) => void;
};

const useProductsStore = create<ProductsState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],

      increment: (id) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === id ? { ...p, quantity: (p.quantity ?? 0) + 1 } : p,
          ),
        })),

      decrement: (id) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === id && (p.quantity ?? 0) > 0
              ? { ...p, quantity: (p.quantity ?? 0) - 1 }
              : p,
          ),
        })),

      addToCart: (product) => {
        set((state) => {
          const existing = state.cart.find((c) => c.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((c) =>
                c.id === product.id
                  ? { ...c, quantity: (c.quantity || 0) + 1 }
                  : c,
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        });
      },

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((c) => c.id !== id),
        })),

      toggleWishlistProduct: (product) =>
        set((state) => ({
          wishlist: state.wishlist.includes(product)
            ? state.wishlist.filter((p) => p.id !== product.id)
            : [...state.wishlist, product],
        })),
    }),
    {
      name: "products-storage", // key in localStorage
    },
  ),
);

//** Cart */
export const increment = (id: Product["id"]) =>
  useProductsStore.getState().increment(id);

export const decrement = (id: Product["id"]) =>
  useProductsStore.getState().decrement(id);

export const addToCart = (product: Product) =>
  useProductsStore.getState().addToCart(product);

export const removeFromCart = (id: Product["id"]) =>
  useProductsStore.getState().removeFromCart(id);

export const useCart = () => useProductsStore((state) => state.cart);

//** Wishlist */

export const toggleWishlistProduct = (product: Product) =>
  useProductsStore.getState().toggleWishlistProduct(product);

export const useWishlist = () => useProductsStore((state) => state.wishlist);
