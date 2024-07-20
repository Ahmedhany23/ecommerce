"use client";

import { useSearchParams } from "next/navigation";
import { useState ,useEffect } from "react";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";
import ProductContainer from "@/components/Product/ProductContainer";
import { useGetproductsByQuery } from "@/app/redux/api/productsApi";

export default function SearchPage() {
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
      <div className="py-10 relative px-3 container mx-auto">
        <SearchCountResult count={count} />
        <div className="flex gap-6">
          <SideFilter />
          <ProductContainer isLoading={isLoading} error={error} data={data} />
        </div>
      </div>
    </main>
  );
}
