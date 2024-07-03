"use client";
import Image from "next/image";
import Link from "next/link";
import "./slider.css";
import { useState, useEffect } from "react";
import { getMainImage } from "@/app/api/getMainImage";
//images
import image1 from "../../../app/images/Image.webp";
import image2 from "../../../app/images/image2.webp";
import image3 from "../../../app/images/image3.webp";

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

export default function Slider() {
  const [sliderImages, setSliderimages] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const ImagesResponse = await getMainImage();
      setSliderimages(ImagesResponse.data);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full relative container mx-auto">
      {sliderImages ? (
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
          {sliderImages.map((sliderItem) =>
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
