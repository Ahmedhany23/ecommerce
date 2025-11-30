import ContactForm from "@/src/features/contact/components/ContactForm";
import ContactUs from "@/src/features/contact/components/ContactUs";
import JustForYouProducts from "@/src/features/wishlist/components/JustForYouProducts";
import WishlistProducts from "@/src/features/wishlist/components/WishlistProducts";
import { prisma } from "@/src/lib/prisma";
import { Breadcrumb, Col, Row } from "antd";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wishlist",
};

export default async function Wishlist() {
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
