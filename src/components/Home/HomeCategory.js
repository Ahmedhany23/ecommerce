"use client"
import Subtitle from "../utilities/Subtitle";
import CategorieContainer from "../Category/CategoryContainer";



export default function HomeCategory() {
  return (
    <div className="container mx-auto py-8 relative">
      <Subtitle title={"Categories"} />

     <CategorieContainer/>
    </div>
  );
}
