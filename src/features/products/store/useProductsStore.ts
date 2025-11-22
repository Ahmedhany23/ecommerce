import { Product } from "@/src/components/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProductsState = {
  cart: Product[];
  increment: (id: number) => void;
  decrement: (id: number) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
};

const useProductsStore = create<ProductsState>()(
  persist(
    (set, get) => ({
      cart: [],

      increment: (id) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
          ),
        })),

      decrement: (id) =>
        set((state) => ({
          cart: state.cart.map((p) =>
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
      name: "cart-storage", // key in localStorage
      
    },
  ),
);

export const increment = (id: number) =>
  useProductsStore.getState().increment(id);

export const decrement = (id: number) =>
  useProductsStore.getState().decrement(id);

export const addToCart = (product: Product) =>
  useProductsStore.getState().addToCart(product);


export const removeFromCart = (id: number) =>
  useProductsStore.getState().removeFromCart(id);

// useProductsStore.ts - Add a selector hook
export const useCart = () => useProductsStore((state) => state.cart);

