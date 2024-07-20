"use client"
import Subtitle from "../utilities/Subtitle";
import CategorieContainer from "../Category/CategoryContainer";
import Loading from "@/app/Loading";
import { useGetcategoriesQuery } from "@/app/redux/api/productsApi";
export default function HomeCategory() {

  const { data, error, isLoading } = useGetcategoriesQuery();

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
     <CategorieContainer categories={data}/>
    </div>
  );
}
 
}
