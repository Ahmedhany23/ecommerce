"use client";
import Image from "next/image";
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
import { useGetmainimageQuery } from "@/app/redux/api/productsApi";

export default function MainImageSlider() {
  const { isLoading, error, data } = useGetmainimageQuery();

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if(data){
    return (
      <div className="w-full relative container mx-auto">
        {data ? (
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
            {data.map((sliderItem) =>
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
