"use client"

import DiscountSection from "@/components/Home/DiscountSection";
import HomeCategory from "@/components/Home/HomeCategory";
import RecommendedSection from "@/components/Home/RecommendedSection";
import Slider from "@/components/Home/Slider/Slider";
import ProductComponent from "@/components/Product/ProductComponent";



export default function Home() {
   

  return (
    <main className=" bg-lbackground dark:bg-dbackground">
      <Slider />
      <HomeCategory />
      {/* Recommended for you */}
      <RecommendedSection/>
      {/* Discount */}
      <DiscountSection />
    {/*   <ProductComponent title={"Electronics"} btnTitle={"See More"} />
      <ProductComponent title={"Home & kitchen"} btnTitle={"See More"} /> */}
    </main>
  );
}
