"use client";

import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductContainer from "@/components/Product/ProductContainer";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategorie } from "@/app/redux/actions/productsAction";

export default function Product() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const dispatch = useDispatch();
  const data = useSelector(state => state.productsReducer.data.products)
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    dispatch(getProductsByCategorie(query))
    setIsLoading(false)
  },[query,dispatch])


  useEffect(() => {
    if (Array.isArray(data)) {
      setCount(data.length);
    } else {
      setCount(0);
    }
  }, [data]);

  return (
    <main className="h-full bg-lbackground">
      <>
        <CategoryHeader />
        <div className="py-10 relative px-3 container mx-auto">
          <SearchCountResult count={count} />
          <div className="flex gap-7">
            <SideFilter />
            <ProductContainer isLoading={isLoading} error={""} data={data} />
          </div>
        </div>
      </>
    </main>
  );
}
