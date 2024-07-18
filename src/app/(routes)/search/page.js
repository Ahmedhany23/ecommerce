"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchBytitle } from "@/app/redux/actions/productsAction";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";
import ProductContainer from "@/components/Product/ProductContainer";
import Pagination from "@/components/utilities/Pagination";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.data.products);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getSearchBytitle(query));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, query]);

  useEffect(() => {
    if (products) {
      console.log(products);
    }
  }, [products]);

  return (
    <main className="h-full bg-lbackground">
      <div className="py-10 relative px-3 container mx-auto">
        <SearchCountResult count={products? products.length : 0 } />
        <div className="flex gap-4">
          <SideFilter />
          <ProductContainer isLoading={loading} error={error} data={products} />
        </div>
        <Pagination />
      </div>
    </main>
  );
}
