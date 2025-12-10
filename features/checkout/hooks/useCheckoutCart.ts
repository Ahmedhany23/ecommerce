"use client";
import convertToSubCurrency from "@/lib/convertToSubcurrency";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IBillingDetails } from "../components/StripeCheckout";
import { CartItem } from "../../products/store/useProductsStore";

export const useCheckoutCart = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: mutationCheckoutCart, isPending: loadingCheckoutCart } =
    useMutation({
      mutationFn: async (values: {
        amount: number;
        billingDetails: IBillingDetails;
        cartItems: CartItem[];
        paymentIntentId: string;
      }): Promise<{ orderId: string }> => {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: convertToSubCurrency(values.amount),
            billingDetails: values.billingDetails,
            cartItems: values.cartItems,
            paymentIntentId: values.paymentIntentId,
          }),
        });
        const data = await response.json();
        return data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      },
    });

  return {
    mutationCheckoutCart,
    loadingCheckoutCart,
  };
};
