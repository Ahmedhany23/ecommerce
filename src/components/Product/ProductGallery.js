"use client";
import Image from "next/image";
import iphone from "../../app/images/iphone.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, A11y } from "swiper/modules";

export default function ProductGallery() {
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
        <SwiperSlide className="">
          <Image src={iphone} alt="iphone"  className="w-full"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
