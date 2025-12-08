import Checkout from "@/src/features/checkout/components/Checkout";
import { Breadcrumb } from "antd";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function CheckoutPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: <Link href="/cart">Cart</Link>,
            },
            {
              title: "Checkout",
            },
          ]}
        />

        <Suspense>
          <Checkout />
        </Suspense>
      </section>
    </main>
  );
}
