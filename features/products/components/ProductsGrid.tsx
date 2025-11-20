"use client";
import { Product } from "@/components/types/product";
import ProductCard from "@/components/ui/ProductCard";
import { Col, Row } from "antd";
import { useSearchParams } from "next/navigation";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  const searchParams = useSearchParams();
  const categoriesParam = searchParams.get("categories");
  const minParam = searchParams.get("min");
  const maxParam = searchParams.get("max");
  const searchParam = searchParams.get("search");

  const categories = categoriesParam
    ? categoriesParam.split(",").map((c) => c.trim().toLowerCase())
    : [];

  const min = minParam ? parseFloat(minParam) : null;
  const max = maxParam ? parseFloat(maxParam) : null;

  const search = searchParam ? searchParam : "";

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      categories.length === 0 ||
      categories.includes(product.category.toLowerCase());

    const minMatch = min === null || product.price >= min;
    const maxMatch = max === null || product.price <= max;

    const searchMatch =
      search === "" ||
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search);
      

    return categoryMatch && minMatch && maxMatch && searchMatch;
  });

  if (!filteredProducts) return null;

  return (
    <Row gutter={[16, 16]}>
      {filteredProducts.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          <ProductCard
            product={product}
            redirectPath={`/products/${product.id}`}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsGrid;
