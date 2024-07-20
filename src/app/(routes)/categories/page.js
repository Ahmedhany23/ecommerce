"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategorie } from "@/app/redux/actions/productsAction";
import SearchCountResult from "@/components/utilities/SearchCountResult";

import ProductContainer from "@/components/Product/ProductContainer";
import Loading from "@/app/Loading";

export default function CateogriePage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productsReducer.data.products);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        dispatch(getProductsByCategorie(query));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
 
  }, [dispatch, query]);

  if(loading){
    return <Loading/>
  }
  
    return (
      <main className="h-full bg-lbackground">
        <div className="py-10 relative px-3 container mx-auto">
          <SearchCountResult count={data ? data.length : 0} />
  
          <ProductContainer isLoading={loading} error={error} data={data} />
        </div>
      </main>
    );
  

}
