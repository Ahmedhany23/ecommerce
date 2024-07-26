"use client";

import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { getProductsByCategorie } from "@/app/redux/actions/productsAction";

import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductContainer from "@/components/Product/ProductContainer";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";
import Loading from "@/app/Loading"; 

export default function Product() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.data.products);
  const isLoading = useSelector((state) => state.productsReducer.isLoading); 

  const [count, setCount] = useState(0);

  useEffect(() => {
 
    dispatch(getProductsByCategorie(query));
  }, [query, dispatch]);

  useEffect(() => {
    if (Array.isArray(products)) {
      setCount(products.length);
    } else {
      setCount(0);
    }
  }, [products]);

  return (
    <main className="h-full bg-lbackground">
      <>
        <CategoryHeader />
        <div className="py-10 relative px-3 container mx-auto">
          <SearchCountResult count={count} />
          <div className="flex gap-7">
            <SideFilter />
            <Suspense fallback={<Loading />}>
              <ProductContainer isLoading={isLoading} error={""} data={products} />
            </Suspense>
          </div>
        </div>
      </>
    </main>
  );
}
