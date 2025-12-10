import Cart from "@/features/cart/components/Cart";
import { Breadcrumb, Col, Row, Skeleton } from "antd";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: "Cart",
            },
          ]}
        />

        <Suspense fallback={<CartSkeleton />}>
          <Cart />
        </Suspense>
      </section>
    </main>
  );
}

const CartSkeleton = () => {
  return (
    <Row gutter={[50, 50]} justify="center" align="middle">
      <Col xs={24}>
        <Skeleton active />
      </Col>
      <Col xs={24}>
        <Skeleton active />
      </Col>
      <Col xs={24}>
        <Skeleton active />
      </Col>
    </Row>
  );
};
