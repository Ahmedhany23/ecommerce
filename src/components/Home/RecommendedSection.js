"use client";

import ProductComponent from "@/components/Product/ProductComponent";
import { useGetproductsQuery } from "@/app/redux/api/productsApi";
import Loading from "@/app/Loading";

export default function RecommendedSection() {
 
  const { data, error, isLoading } = useGetproductsQuery();
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
