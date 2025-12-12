"use client";
import { Divider } from "@/components/ui/Divider";
import calculateCartTotal from "@/lib/calculateCartTotal";
import convertToSubCurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";

import StripeForm from "./StripeForm";
import { useGetCart } from "@/hooks/useGetCart";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("Missing Stripe public key");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string,
);

// Define proper types
export interface IBillingDetails {
  address: string;
  city: string;
  phone: string;
  email: string;
  [key: string]: string;
}

const StripeCheckout = ({
  billingDetails,
}: {
  billingDetails: IBillingDetails;
}) => {
  const { cart, isLoading } = useGetCart();

  const subtotal = calculateCartTotal(cart);

  const finalProduct = cart.map((item) => {
    return {
      ...item.product,
      quantity: item.quantity,
    };
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        <div className="flex h-[100px] jutify-end flex-col gap-3 overflow-y-auto">
          {finalProduct?.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={item.image[0]?.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="h-20 w-20 object-contain object-center"
                />
                <Link href={`/product/${item.id}`}>
                  <p className="font-inter hover:text-accent-danger font-semibold text-black transition-all duration-200">
                    {item.name}
                  </p>
                </Link>
              </div>
              <p>${item.price}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins font-medium text-black">Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>

        <Divider className="my-2 border-black" />

        <div className="flex items-center justify-between">
          <p className="font-poppins font-medium text-black">Shipping</p>
          <p>Free</p>
        </div>

        <Divider className="my-2 border-black" />

        <div className="flex items-center justify-between">
          <p className="font-poppins font-medium text-black">Total</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
      </div>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(subtotal),
          currency: "usd",
        }}
      >
        <StripeForm amount={subtotal} billingDetails={billingDetails} />
      </Elements>
    </div>
  );
};

export default StripeCheckout;
