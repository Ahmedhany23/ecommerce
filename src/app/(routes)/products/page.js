
import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductComponent from "@/components/Product/ProductComponent";
import Pagination from "@/components/utilities/Pagination";

import SearchCountResult from "@/components/utilities/SearchCountResult";
import SideFilter from "@/components/utilities/SideFilter";

export default function Product() {
  return (
    <main className="h-full bg-lbackground">
      <CategoryHeader />
      <div className="py-10 relative container mx-auto">
        <SearchCountResult count={300} />
        <div className="flex ">
        <SideFilter/>
        <ProductComponent/>
        </div>
      <Pagination/>
      </div>
     
    </main>
  );
}
