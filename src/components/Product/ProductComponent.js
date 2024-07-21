"use client";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import Subtitle from "../utilities/Subtitle";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
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
import "./style.css";
import Loading from "@/app/Loading";
export default function ProductComponent({ title, btnTitle, path, products }) {
  useEffect(() => {}, [products]);
  if (products) {
    return (
      <div className="py-10 container mx-auto flex flex-col justify-center  ">
        <Subtitle title={title} btnTitle={btnTitle} path={path} />
        {products?.length >= 1 ? (
          <div className="relative">
            <div className="swiper-button-next">
              <IoIosArrowForward />
            </div>
            <div className="swiper-button-prev">
              <IoIosArrowBack />
            </div>
            <Swiper
              spaceBetween={0}
              breakpoints={{
                slidesPerView: 1,
                520: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 4,
                },
                1500: {
                  slidesPerView: 5,
                },
                1700: {
                  slidesPerView: 5,
                },
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              speed={200}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="mx-auto mt-4"
            >
              {products.map((product, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <ProductCard
                    products={product}
                    id={product.id}
                    image={product.attributes.images.data[0].attributes.url}
                    description={product.attributes.description}
                    price={product.attributes.price}
                    rate={product.attributes.rate}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
