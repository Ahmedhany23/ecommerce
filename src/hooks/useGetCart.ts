"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { CartItem, useCart } from "../features/products/store/useProductsStore";

// Fetch function for server cart
const fetchCart = async () => {
  const res = await fetch("/api/cart");
  if (!res.ok) throw new Error("Failed to fetch cart");
  const data = await res.json();
  return data.cart?.items || [];
};

export function useGetCart() {
  const { status } = useSession();
  const guestCart = useCart();

  const isAuthenticated = status === "authenticated";
  const isLoadingSession = status === "loading";

  // React Query for server cart
  const {
    data: serverCart = [],
    isLoading: isLoadingServerCart,
    error,
    refetch,
  } = useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: fetchCart,
    enabled: isAuthenticated, // Only fetch when authenticated
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    retry: 2,
  });

  // Return appropriate cart based on auth status
  if (isLoadingSession) {
    return {
      cart: [],
      isLoading: true,
      error: null,
      refetch: () => {},
    };
  }

  if (isAuthenticated) {
    return {
      cart: serverCart || [],
      isLoading: isLoadingServerCart,
      error,
      refetch,
    };
  }

  // Guest user - return guest cart from zustand
  return {
    cart: guestCart,
    isLoading: false,
    error: null,
    refetch: () => {},
  };
}
