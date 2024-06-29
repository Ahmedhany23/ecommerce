import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductDetailsComponent from "@/components/Product/ProductDetails";

export default function ProductDetails() {
  return (
    <main className="dark:bg-slate-900 h-full sm:h-screen">
    <CategoryHeader/>
    <div className="container mx-auto py-10">
    <ProductDetailsComponent/>
    </div>
    </main>
  )
}
