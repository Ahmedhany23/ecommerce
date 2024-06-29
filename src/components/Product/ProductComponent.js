"use client";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Subtitle from "../utilities/Subtitle";

export default function ProductComponent({ title, btnTitle, path, products }) {
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="py-10 container mx-auto flex flex-col justify-center gap-5">
      <Subtitle title={title} btnTitle={btnTitle} path={path} />

      <div className="mx-auto md:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center place-content-center">
        {products &&
          products.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              image={product.attributes.images.data[0].attributes.url}
              description={product.attributes.description}
              price={product.attributes.price}
              rate={product.attributes.rate}
            />
          ))}
      </div>
    </div>
  );
}
