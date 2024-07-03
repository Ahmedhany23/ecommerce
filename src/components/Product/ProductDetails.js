"use client";
import Loading from "@/app/Loading";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";
import { getProduct } from "@/app/api/getProduct";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetailsComponent() {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await getProduct();
        const products = productResponse.data;
        const filterById = products.filter((e) => e.id === Number(id));
        setProductDetails(filterById);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
      {productDetails ? (
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
