"use client";
import Loading from "@/app/Loading";
import ProductGallery from "./ProductGallery";
import ProductText from "./ProductText";



export default function ProductDetailsComponent({product}) {
  


  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
      {product ? (
        <>
          <ProductGallery products={product} />
          <ProductText products={product} />
        </>
      ) : (
        <div className="flex justify-center"><Loading /></div>
      )}
    </div>
  );
}
