"use client";
import Loading from "@/app/Loading";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function ProductDetailsComponent() {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
      {productDetails.length > 0 ? (
        <>
          <ProductGallery products={productDetails} />
          <ProductText products={productDetails} />
        </>
      ) : (
        <div className="flex justify-center"><Loading /></div>
      )}
    </div>
  );
}
