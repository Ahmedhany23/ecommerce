"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";
import ProductContainer from "@/components/Product/ProductContainer";
import { getProductsByCategorie } from "@/app/redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "@/app/Loading";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productsReducer.data.products);
  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getProductsByCategorie(query));
    setIsLoading(false);
  }, [query, dispatch]);
  useEffect(() => {
    if (Array.isArray(data)) {
      setCount(data.length);
    } else {
      setCount(0);
    }
  }, [data]);

  return (
    <main className="h-full bg-lbackground">
      <div className="py-10 relative px-3 container mx-auto">
        <SearchCountResult count={count} />
        <div className="flex gap-6">
          <SideFilter />
          <Suspense fallback={<Loading />}>
            <ProductContainer isLoading={isLoading} error={""} data={data} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
