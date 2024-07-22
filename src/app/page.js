"use client";

import DiscountSection from "@/components/Home/DiscountSection";
import HomeCategory from "@/components/Home/HomeCategory";
import RecommendedSection from "@/components/Home/RecommendedSection";
import MainImageSlider from "@/components/Home/MainImageSlider";


export default function Home() {
  return (
    <main className=" bg-lbackground dark:bg-dbackground">
      <MainImageSlider />
       {/* Category */}
      <HomeCategory />
      {/* Discount */}
      <DiscountSection />
      {/* Recommended for you */}
      <RecommendedSection />
    </main>
  );
}
