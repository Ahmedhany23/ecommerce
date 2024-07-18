"use client";
import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductDetailsComponent from "@/components/Product/ProductDetails";
import RateContainer from "@/components/Rate/RateContainer";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import { getProduct } from "@/app/api/getProducts";
import Loading from "@/app/Loading";
export default function ProductDetails() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(['product', id], () => getProduct(id));
  if (isLoading) {
    return <Loading />;
  }
  console.log(data)
  if(data){
    return (
      <main className=" bg-lbackground h-full">
        <CategoryHeader />
        <div className="container mx-auto py-10 flex flex-col gap-20">
          <ProductDetailsComponent product={data.data} />
          <RateContainer />
        </div>
      </main>
    );
  }
 
}
