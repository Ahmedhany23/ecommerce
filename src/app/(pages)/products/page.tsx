import { ProductWhereInput } from "@/generated/prisma/models";
import { ProductFallbackLoader } from "@/src/features/home/components/loader/ProductFallbackLoader";
import ProductMenuFilters from "@/src/features/products/components/ProductMenuFilters";
import ProductsGrid from "@/src/features/products/components/ProductsGrid";
import { prisma } from "@/src/lib/prisma";

import { Breadcrumb, Col, Row } from "antd";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Products",
  description: "Products page",
};

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;

  const categoriesParam = params.categories;
  const minParam = params.min;
  const maxParam = params.max;
  const searchParam = params.search;

  // Convert price params to numbers
  const min = minParam ? Number(minParam) : undefined;
  const max = maxParam ? Number(maxParam) : undefined;

  // Convert category param to an array
  const categories =
    typeof categoriesParam === "string"
      ? categoriesParam.split(",")
      : Array.isArray(categoriesParam)
        ? categoriesParam
        : undefined;

  const where: ProductWhereInput = {};

  // Filter by categories (array)
  if (categories && categories.length > 0) {
    where.category = {
      in: categories,
    };
  }

  // Filter by price
  if (min || max) {
    where.price = {};

    if (min) where.price.gte = min;
    if (max) where.price.lte = max;
  }

  // Filter by search
  if (searchParam) {
    where.name = {
      contains: searchParam as string,
      mode: "insensitive",
    };
  }

  // Fetch products
  const products = await prisma.product.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[
            { title: <Link href="/">Home</Link> },
            { title: <p>Products</p> },
          ]}
        />

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={4}>
            <Suspense>
              <ProductMenuFilters />
            </Suspense>
          </Col>

          <Col xs={24} lg={20}>
            <Suspense fallback={<ProductFallbackLoader />}>
              <ProductsGrid products={products} />
            </Suspense>
          </Col>
        </Row>
      </section>
    </main>
  );
}
