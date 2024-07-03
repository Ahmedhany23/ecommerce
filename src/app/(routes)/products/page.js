"use client";
import { useState, useEffect } from "react";

import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductContainer from "@/components/Product/ProductContainer";
import Pagination from "@/components/utilities/Pagination";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";

//api
import { getRecommend } from "@/app/api/getRecommended";
import Loading from "@/app/Loading";

export default function Product() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const ProductsResponse = await getRecommend();
      setProducts(ProductsResponse.data);
    };
    fetchData();
  }, []);

  return (
    <main className="h-full bg-lbackground">
      {products ? (
        <>
          <CategoryHeader />
          <div className="py-10 relative px-3 container mx-auto">
            <SearchCountResult count={300} />
            <div className="flex gap-4">
              <SideFilter />
              <ProductContainer products={products} />
            </div>
            <Pagination />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </main>
  );
}
