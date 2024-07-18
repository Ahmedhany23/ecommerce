"use client";
import ProductComponent from "@/components/Product/ProductComponent";
import { useEffect,useState } from "react";

export default function RecommendedSection() {
    const [products, setProducts] = useState([])
   
  return (
    <div>
      <ProductComponent
        title={"Recommended for you"}
        btnTitle={"See More"}
        path="/products"
        products={products}
      />
    </div>
  );
}
