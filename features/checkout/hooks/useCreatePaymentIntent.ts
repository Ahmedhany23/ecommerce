"use client";
import convertToSubCurrency from "@/lib/convertToSubcurrency";
import { useMutation } from "@tanstack/react-query";

export const useCreatePaymentIntent = () => {
  const {
    mutateAsync: mutationCreatePaymentIntent,
    isPending: loadingCreatePaymentIntent,
  } = useMutation({
    mutationFn: async (values: {
      amount: number;
    }): Promise<{ clientSecret: string; paymentIntentId: string }> => {
      const response = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: convertToSubCurrency(values.amount),
        }),
      });
      const data = await response.json();
      return data;
    },
  });

  return {
    mutationCreatePaymentIntent,
    loadingCreatePaymentIntent,
  };
};
