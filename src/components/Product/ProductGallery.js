"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ products }) {
  const [index, setIndex] = useState(0);

  const handleclickImage = (i) => {
    setIndex(i);
  };

  return (
    <div className="flex">
      {products &&
        products.map((product, productIndex) => (
          <div key={product.id || productIndex} className="flex flex-col gap-3">
            {product.attributes.images.data.map((image, imgIndex) => (
              <div
                key={image.id}
                className="w-[76px] h-[103.7px] border rounded-md border-laccent cursor-pointer hover:scale-95"
                onClick={() => handleclickImage(imgIndex)}
              >
                <Image
                  src={image.attributes.url}
                  alt={`Product Image ${imgIndex + 1}`}
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            ))}
          </div>
        ))}
      <div className="w-[370px] h-[470px!important] bg-transparent rounded-md">
        {products &&
          products.map((product, productIndex) => (
            <Image
              key={`main-image-${product.id || productIndex}`}
              src={product.attributes.images.data[index].attributes.url}
              alt={`Product Image ${productIndex + 1}`}
              width={1000}
              height={1000}
              priority
            />
          ))}
      </div>
    </div>
  );
}
