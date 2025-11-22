import { Product } from "@/src/components/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductsState = {
  products: Product[];
  cart: Product[];
  increment: (id: string) => void;
  decrement: (id: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};

const useProductsStore = create<ProductsState>()(
  persist(
    (set, get) => ({
      products: [],
      cart: [],

      increment: (id) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
          ),
        })),

      decrement: (id) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id && p.quantity > 0
              ? { ...p, quantity: p.quantity - 1 }
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
    }),
    {
      name: "products-storage", // key in localStorage
    },
  ),
);

export const increment = (id: string) =>
  useProductsStore.getState().increment(id);

export const decrement = (id: string) =>
  useProductsStore.getState().decrement(id);

export const addToCart = (product: Product) =>
  useProductsStore.getState().addToCart(product);


export const removeFromCart = (id: string) =>
  useProductsStore.getState().removeFromCart(id);

// useProductsStore.ts - Add a selector hook
export const useCart = () => useProductsStore((state) => state.cart);
export const useProducts = () => useProductsStore((state) => state.products);
