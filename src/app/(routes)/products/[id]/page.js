"use client"
import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductDetailsComponent from "@/components/Product/ProductDetails";
import RateContainer from "@/components/Rate/RateContainer";

export default function ProductDetails() {

  return (
    <main className=" bg-lbackground h-full">
    <CategoryHeader/>
    <div className="container mx-auto py-10 flex flex-col gap-20">
    <ProductDetailsComponent/>
    <RateContainer/>
    </div>
    </main>
  )
}
