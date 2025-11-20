import { ProductFallbackLoader } from "@/features/home/components/loader/ProductFallbackLoader";
import ProductMenuFilters from "@/features/products/components/ProductMenuFilters";
import ProductsGrid from "@/features/products/components/ProductsGrid";

import { getProducts } from "@/server/products";
import { Breadcrumb, Col, Row } from "antd";
import { Metadata } from "next";

import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export default async function Products() {
  const products = await getProducts();

  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Home</Link>,
            },
            {
              title: <p>Products</p>,
            },
          ]}
        />
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={4}>
            <Suspense>
              <ProductMenuFilters />
            </Suspense>
          </Col>
          <Col xs={24} lg={20}>
            {" "}
            <Suspense fallback={<ProductFallbackLoader />}>
              <ProductsGrid products={products} />
            </Suspense>
          </Col>
        </Row>
      </section>
    </main>
  );
}
