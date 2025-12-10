"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddProductIntoCart = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: mutationAddProductIntoCart,
    isPending: loadingAddProductIntoCart,
  } = useMutation({
    mutationFn: async (productId: string) => {
      await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });
  return { mutationAddProductIntoCart, loadingAddProductIntoCart };
};
