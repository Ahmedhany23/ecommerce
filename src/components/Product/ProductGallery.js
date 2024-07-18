"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ products }) {
  const [index, setIndex] = useState(0);

  const handleclickImage = (i) => {
    setIndex(i);
  };

  return (
    <div className="flex gap-3">
      {products && (
        <div className="flex flex-col gap-3">
          {products.attributes.images.data.map((image, imgIndex) => (
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
      )}
      <div className="w-[370px] h-[470px!important] bg-transparent rounded-md">
        {products && (
          <Image
            key={`ProductImage ${index}`}
            src={products.attributes.images.data[index].attributes.url}
            alt={`Product Image ${index + 1}`}
            width={1000}
            height={1000}
            priority
          />
        )}
      </div>
    </div>
  );
}
