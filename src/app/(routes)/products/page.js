"use client";

import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductContainer from "@/components/Product/ProductContainer";
import Pagination from "@/components/utilities/Pagination";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";
import { getProducts } from "@/app/api/getProducts";
import { useQuery } from "react-query"
export default function Product() {
  const { isLoading, error, data } = useQuery('products', getProducts);

  return (
    <main className="h-full bg-lbackground">
      <>
        <CategoryHeader />
        <div className="py-10 relative px-3 container mx-auto">
          <SearchCountResult count={300} />
          <div className="flex gap-4">
            <SideFilter />
            <ProductContainer isLoading={isLoading} error={error} data={data} />
          </div>
          <Pagination />
        </div>
      </>
    </main>
  );
}
