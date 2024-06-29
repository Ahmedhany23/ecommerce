"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, A11y } from "swiper/modules";

export default function ProductGallery({products}) {
  return (
    <div className="flex justify-center items-center h-full">
      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        modules={[Navigation, A11y]}
        speed={700}
        loop
        Navigation={true}
        className="w-[370px] h-[470px!important] bg-white rounded-md"
      >
      {
        products && products.map((product,index)=>(
          <SwiperSlide className="" key={index}>
          <Image src={product.attributes.images.data[index].attributes.url} alt="iphone"  width={1000} height={1000} className="w-full"/>
        </SwiperSlide>
        ))
      }
        
      </Swiper>
    </div>
  );
}
