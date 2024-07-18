"use client"
import Subtitle from "../utilities/Subtitle";
import CategorieContainer from "../Category/CategoryContainer";
import { useQuery } from "react-query";
import { getCategories } from "@/app/api/getCategories";
import Loading from "@/app/Loading";
export default function HomeCategory() {
  const { isLoading, error, data } = useQuery('categories', getCategories);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

if(data){
  return (
    <div className="container mx-auto py-8 relative">
      <Subtitle title={"Categories"} />

     <CategorieContainer categories={data.data}/>
    </div>
  );
}
 
}
