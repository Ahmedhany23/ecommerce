import JustForYouProducts from "@/features/wishlist/components/JustForYouProducts";
import WishlistProducts from "@/features/wishlist/components/WishlistProducts";
import { PrismaClient } from "@prisma/client";

import { Breadcrumb, Col, Row } from "antd";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wishlist",
};

export default async function Wishlist() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany();

  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: "Wishlist",
            },
          ]}
        />
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24}>
            <WishlistProducts />
          </Col>
          <Col xs={24}>
            <JustForYouProducts products={products} />
          </Col>
        </Row>
      </section>
    </main>
  );
}
