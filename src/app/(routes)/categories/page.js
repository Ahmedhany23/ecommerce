"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import { useGetproductsByQuery } from "@/app/redux/api/productsApi";
import ProductContainer from "@/components/Product/ProductContainer";
import Loading from "@/app/Loading";

export default function CateogriePage() {
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="h-full bg-lbackground">
      <Suspense fallback={<Loading />}>
        <div className="py-10 relative px-3 container mx-auto">
          <SearchCountResult count={count} />
          <ProductContainer isLoading={isLoading} error={error} data={data} />
        </div>
      </Suspense>
    </main>
  );
}
