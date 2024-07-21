"use client";
import Loading from "@/app/Loading";

import ProductCard from "./ProductCard";
export default function ProductContainer({ isLoading, error, data }) {
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    throw error(error.message);
  }
  if (data) {
    return (
      <div className="py-10 container mx-auto   ">
        {data && (
          <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center justify-items-center">
            {data.map((product, index) => (
              <div key={index} className="">
                <ProductCard
                  products={product}
                  id={product.id}
                  image={product.attributes.images.data[0].attributes.url}
                  description={product.attributes.description}
                  price={product.attributes.price}
                  rate={product.attributes.rate}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
