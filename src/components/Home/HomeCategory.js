"use client"
import Subtitle from "../utilities/Subtitle";
import CategorieContainer from "../Category/CategoryContainer";
import { getCategories } from "@/app/redux/actions/productsAction";
import { useState,useEffect } from "react";
import Loading from "@/app/Loading";
import { useDispatch,useSelector } from "react-redux";
export default function HomeCategory() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productsReducer.data.categories);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
         dispatch(getCategories());
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (categories) {
      console.log(categories);
    }
  }, [categories]);


  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

if(categories){
  return (
    <div className="container mx-auto py-8 relative">
      <Subtitle title={"Categories"} />

     <CategorieContainer categories={categories}/>
    </div>
  );
}
 
}
