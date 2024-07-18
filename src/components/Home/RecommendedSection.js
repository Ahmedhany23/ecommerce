"use client";
import { getProducts } from "@/app/api/getProducts";
import ProductComponent from "@/components/Product/ProductComponent";
import { useEffect,useState } from "react";
import Loading from "@/app/Loading";
import { useQuery } from "react-query";
export default function RecommendedSection() {
  const { isLoading, error, data } = useQuery('products', getProducts);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }


    if(data){
      return (
        <div>
          <ProductComponent
            title={"Recommended for you"}
            btnTitle={"See More"}
            path="/products"
            products={data}
          />
        </div>
      );
    }
 
}
