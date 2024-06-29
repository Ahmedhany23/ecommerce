
import BrandFeatured from "@/components/Brand/BrandFeatured";
import DiscountSection from "@/components/Home/DiscountSection";
import HomeCategory from "@/components/Home/HomeCategory";
import RecommendedSection from "@/components/Home/RecommendedSection";
import Slider from "@/components/Home/Slider/Slider";
import ProductComponent from "@/components/Product/ProductComponent";



export default function Home() {
   

  return (
    <main className=" bg-white dark:bg-slate-900">
      <Slider />
      <HomeCategory />
      <BrandFeatured title={"Brands"} />
      {/* Recommended for you */}
      <RecommendedSection/>
      <DiscountSection />
      <ProductComponent title={"Electronics"} btnTitle={"See More"} />
      <ProductComponent title={"Home & kitchen"} btnTitle={"See More"} />
    </main>
  );
}
