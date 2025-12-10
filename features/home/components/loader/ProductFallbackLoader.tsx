import { ProductCardSkeleton } from "@/components/ui/ProductCardSkeleton";
import { Col, Row } from "antd";

export const ProductFallbackLoader = () => (
  <Row gutter={[16, 16]} justify="center" align="middle">
    {Array.from({ length: 4 }).map((_, i) => (
      <Col key={i} xs={24} sm={12} md={8} lg={6}>
        <ProductCardSkeleton />
      </Col>
    ))}
  </Row>
);
