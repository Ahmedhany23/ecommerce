"use client";
import Image from "next/image";
import Link from "next/link";
import "./slider.css";
//images
import image1 from "@/app/images/image.webp";
import image2 from "@/app/images/image2.webp";
import image3 from "@/app/images/image3.webp";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/pagination";

const sliderimage = [{ img: image1 }, { img: image2 }, { img: image3 }];

export default function Slider() {
  return (
    <div className="w-full relative container mx-auto  ">
      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        speed={700}
        loop
        pagination={true}
        autoplay
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        className="w-full "
      >
        {sliderimage &&
          sliderimage.map((s) => (
            <SwiperSlide key={s.img} className=" w-full  ">
              <Image src={s.img} alt={s.img} className="w-full" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
