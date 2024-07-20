"use client";
import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductDetailsComponent from "@/components/Product/ProductDetails";
import RateContainer from "@/components/Rate/RateContainer";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/app/Loading";
import { getProduct } from "@/app/redux/actions/productsAction";
import { useState, useEffect } from "react";
import { useGetOneProductQuery } from "@/app/redux/api/productsApi";
export default function ProductDetails() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetOneProductQuery(id)
  if(error){
    throw error(error.message)
  }

  if (isLoading) {
    return <Loading />;
  }

    if(data){
      return (
        <main className=" bg-lbackground h-full">
          <CategoryHeader />
          <div className="container mx-auto py-10 flex flex-col gap-20">
            <ProductDetailsComponent product={data} />
            <RateContainer />
          </div>
        </main>
      );
    }
}
