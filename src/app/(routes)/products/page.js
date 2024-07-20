"use client";

import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductContainer from "@/components/Product/ProductContainer";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";
import { useSearchParams } from "next/navigation";
import { useGetproductsByQuery } from "@/app/redux/api/productsApi";
import { useEffect, useState } from "react";

export default function Product() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const { data, error, isLoading } = useGetproductsByQuery(query);
  const [count, setCount] = useState(0);

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
            <ProductContainer isLoading={isLoading} error={error} data={data} />
          </div>
        </div>
      </>
    </main>
  );
}
