

import { Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const slides = [1, 2, 3];

  return (
    <Carousel
      autoplay
      dots
      draggable
      effect="scrollx"
      className="w-full lg:max-w-4xl lg:h-[344px] shadow-2xl mt-10 mx-auto"
    >
      {slides.map((_, index) => (
        <div key={index}>
          <div className="bg-black w-full px-2 md:pl-16 flex sm:gap-[38px]">
            <div>
              {/* Title */}
              <div className="flex items-center gap-6 pt-[58px] ">
                <Image
                  src="/icons/apple.png"
                  alt="apple logo"
                  width={40}
                  height={49}
                />
                <p className="text-white mt-2">iPhone 14 Series</p>
              </div>

              {/* Para */}
              <p className="mt-5 text-white text-2xl lg:text-5xl max-w-[294px] font-inter font-semibold lg:leading-[60px]">
                Up to 10% off Voucher
              </p>

              {/* Link */}
              <Link
                href="/shop"
                className="text-white! font-medium flex items-center gap-2 mt-[22px] pb-[47px]"
              >
                <p className="border-b w-fit">Shop Now</p>
                <ArrowRight size={22} />
              </Link>
            </div>

            {/* Image */}
            <div className="w-full sm:w-auto pointer-events-none">
              <Image
                src="/images/iphone.png"
                alt="iphone"
                width={500}
                height={500}
                className="pt-20 sm:pt-10 md:pt-4"
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
