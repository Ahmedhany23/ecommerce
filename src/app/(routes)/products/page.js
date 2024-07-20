"use client";

import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductContainer from "@/components/Product/ProductContainer";
import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";
import { getProducts, getProductsByCategorie } from "@/app/redux/actions/productsAction";
import { useDispatch,useSelector } from "react-redux";
export default function Product() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.data.products);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(query === ""){
          dispatch(getProducts());
        }
        else{
          dispatch(getProductsByCategorie(query))
        }
         
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch,query]);

  return (
    <main className="h-full bg-lbackground">
      <>
        <CategoryHeader />
        <div className="py-10 relative px-3 container mx-auto">
          <SearchCountResult count={products.length > 0 ? products.length : 0} />
          <div className="flex gap-7">
            <SideFilter />
            <ProductContainer isLoading={loading} error={error} data={products} />
          </div>
        </div>
      </>
    </main>
  );
}
