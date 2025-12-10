import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRemoveProductFromCart = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: mutationRemoveProductFromCart,
    isPending: loadingRemoveProductFromCart,
  } = useMutation({
    mutationFn: async (productId: string) => {
      await fetch("/api/cart", {
        method: "DELETE",
        body: JSON.stringify({ productId }),
      });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });
  return { mutationRemoveProductFromCart, loadingRemoveProductFromCart };
};
