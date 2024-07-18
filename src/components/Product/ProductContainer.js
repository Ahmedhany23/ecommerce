"use client";
import { useEffect,useState } from "react";
import Loading from "@/app/Loading";

import ProductCard from "./ProductCard";

export default function ProductContainer({products}) {


    useEffect(() => {}, [products]);
  
    
        return (
          <div className="py-10 container mx-auto   ">
           
            {products?.length >= 1 ? (
              <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center justify-items-center">
                
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className=""
                    >
                      <ProductCard
                        id={product.id}
                        image={product.attributes.images.data[0].attributes.url}
                        description={product.attributes.description}
                        price={product.attributes.price}
                        rate={product.attributes.rate}
                      />
                    </div>
                  ))}
              
              </div>
            ): <Loading/>}
          </div>
        );
   
    }
