"use client";
import { Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const slides = [1, 2, 3];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Carousel
      autoplay
      dots
      draggable
      effect="scrollx"
      className="mx-auto mt-10 w-full lg:h-[344px] lg:max-w-4xl"
      afterChange={(current) => setActiveIndex(current)}
    >
      {slides.map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <div key={index}>
            <div className="flex w-full rounded-md bg-black px-2 sm:gap-[38px] md:pl-16">
              <div className="select-none">
                {/* Title */}
                <div className="flex items-center gap-6 pt-[58px]">
                  <Image
                    src="/icons/apple.png"
                    alt="apple logo"
                    width={40}
                    height={49}
                  />
                  <p className="mt-2 text-white">iPhone 14 Series</p>
                </div>

                {/* Para */}
                <p className="font-inter mt-5 max-w-[294px] text-2xl font-semibold text-white lg:text-5xl lg:leading-[60px]">
                  Up to 10% off Voucher
                </p>

                {/* Link */}
                <Link
                  href="/shop"
                  tabIndex={isActive ? 0 : -1}
                  aria-hidden={!isActive}
                  className="mt-[22px] flex items-center gap-2 pb-[47px] font-medium text-white"
                >
                  <p className="w-fit border-b">Shop Now</p>
                  <ArrowRight size={22} />
                </Link>
              </div>

              {/* Image */}
              <div className="w-full select-none sm:w-auto">
                <Image
                  src="/images/iphone.png"
                  alt="iphone"
                  width={500}
                  height={500}
                  className="pt-20 sm:pt-10 md:pt-4"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Hero;
