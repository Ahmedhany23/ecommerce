"use client";
import Image from "next/image";
import Link from "next/link";
import "./slider.css";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
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
import Loading from "@/app/Loading";

import { getMainImage } from "@/app/api/getMainImage";

export default function Slider() {
  const { isLoading, error, data } = useQuery('mainImage', getMainImage);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if(data){
    return (
      <div className="w-full relative container mx-auto">
        {data.data.length > 0 ? (
          <Swiper
            spaceBetween={0}
            slidesPerView="auto"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            speed={700}
            loop
            pagination={true}
            autoplay
            style={{
              "--swiper-pagination-color": "black",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "12px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            className="w-full h-[200px] lg:h-[319px]"
          >
            {data.data.map((sliderItem) =>
              sliderItem.attributes.image.data.map((image) => (
                <SwiperSlide key={image.id} className="w-full h-full">
                  <Image
                    src={image.attributes.formats.large.url}
                    alt={image.attributes.name}
                    className="w-full h-full"
                    width={1000}
                    height={1000}
                    priority
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
 
}
