import BrandFeatured from "@/components/Brand/BrandFeatured";
import DiscountSection from "@/components/Home/DiscountSection";
import HomeCategory from "@/components/Home/HomeCategory";
import Slider from "@/components/Home/Slider/Slider";
import ProductComponent from "@/components/Product/ProductComponent";


export default function Home() {
  return (
    <main className=" bg-white dark:bg-slate-900">
    <Slider/>
    <HomeCategory/>
    <ProductComponent title={"Recommended for you"} btnTitle={"See More"}/>
    <DiscountSection/>
    <ProductComponent title={"Electronics"} btnTitle={"See More"}/>
    <BrandFeatured title={"Brands"}/>
    <ProductComponent title={"Home & kitchen"} btnTitle={"See More"}/>

    </main>
  );
}
