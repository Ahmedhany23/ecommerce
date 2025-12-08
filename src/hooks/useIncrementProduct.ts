"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useIncrementProduct = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: mutationIncrementProduct,
    isPending: loadingIncrementProduct,
  } = useMutation({
    mutationFn: async (productId: string) => {
      await fetch("/api/cart/increment", {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });
  return { mutationIncrementProduct, loadingIncrementProduct };
};
