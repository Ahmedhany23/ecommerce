import { Product } from "@/generated/prisma/browser";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Match the Prisma CartItem structure
export type CartItem = {
  id?: string; // Optional for local items not yet saved to DB
  productId: string;
  product: Product;
  quantity: number;
};

type ProductsState = {
  cart: CartItem[];
  wishlist: Product[];

  // Cart operations
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  emptyCart: () => void;

  // Wishlist operations
  toggleWishlistProduct: (product: Product) => void;

  // Sync operations (for backend synchronization)
  syncCartFromDB: (items: CartItem[]) => void;
  updateCartItemId: (productId: string, cartItemId: string) => void;
};

const useProductsStore = create<ProductsState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],

      increment: (productId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        })),

      decrement: (productId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.productId === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        })),

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find(
            (item) => item.productId === product.id,
          );
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.productId === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }
          return {
            cart: [
              ...state.cart,
              {
                productId: product.id,
                product,
                quantity: 1,
              },
            ],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.productId !== productId),
        })),

      emptyCart: () => set({ cart: [] }),

      toggleWishlistProduct: (product) =>
        set((state) => ({
          wishlist: state.wishlist.find((p) => p.id === product.id)
            ? state.wishlist.filter((p) => p.id !== product.id)
            : [...state.wishlist, product],
        })),

      // Sync cart from database (useful after login or page refresh)
      syncCartFromDB: (items) => set({ cart: items }),

      // Update local cart item with database ID after saving
      updateCartItemId: (productId, cartItemId) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.productId === productId ? { ...item, id: cartItemId } : item,
          ),
        })),
    }),
    {
      name: "products-storage",
    },
  ),
);

//** Cart Hooks & Actions */
export const increment = (productId: string) =>
  useProductsStore.getState().increment(productId);

export const decrement = (productId: string) =>
  useProductsStore.getState().decrement(productId);

export const addToCart = (product: Product) =>
  useProductsStore.getState().addToCart(product);

export const removeFromCart = (productId: string) =>
  useProductsStore.getState().removeFromCart(productId);

export const useCart = () => useProductsStore((state) => state.cart);

export const emptyCart = () => useProductsStore.getState().emptyCart();

//** Wishlist Hooks & Actions */
export const toggleWishlistProduct = (product: Product) =>
  useProductsStore.getState().toggleWishlistProduct(product);

export const useWishlist = () => useProductsStore((state) => state.wishlist);

//** Sync Actions */
export const syncCartFromDB = (items: CartItem[]) =>
  useProductsStore.getState().syncCartFromDB(items);

export const updateCartItemId = (productId: string, cartItemId: string) =>
  useProductsStore.getState().updateCartItemId(productId, cartItemId);

//** Helper to convert cart to database format */
export const getCartForDB = () => {
  const cart = useProductsStore.getState().cart;
  return cart.map((item) => ({
    productId: item.productId,
    quantity: item.quantity,
  }));
};
