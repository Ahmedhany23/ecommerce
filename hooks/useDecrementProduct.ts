"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDecrementProduct = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: mutationDecrementProduct,
    isPending: loadingDecrementProduct,
  } = useMutation({
    mutationFn: async (productId: string) => {
      await fetch("/api/cart/decrement", {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });
  return { mutationDecrementProduct, loadingDecrementProduct };
};
