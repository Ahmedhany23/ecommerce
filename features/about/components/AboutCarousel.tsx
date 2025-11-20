"use client";

import { Carousel } from "antd";

import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const abouts = [
  {
    name: "Tom Cruise",
    department: "Founder & Chairman",
  },
  {
    name: "Emma Watson",
    department: "Managing Director",
  },
  {
    name: "Will Smith",
    department: "Product Designer",
  },
];

const AboutCarousel = () => {
  return (
    <Carousel
      infinite
      autoplay
      dots
      draggable
      effect="scrollx"
      slidesToShow={3}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
    >
      {abouts.map((item, index) => (
        <div key={index} className="h-[564px] rounded-md">
          <div className="mx-auto flex w-full flex-col items-start justify-center md:w-[370px]">
            <div className="bg-surface-alt relative h-[340px] w-full">
              <Image
                src={`/images/image${index + 1}.webp`}
                alt={item.name}
                fill
                className="object-contain object-center"
              />
            </div>
            <div className="mt-8 text-center xl:text-left">
              <h4 className="font-inter text-text-3 mb-2 text-[2rem] font-medium">
                {item.name}
              </h4>
              <p className="text-base font-normal">{item.department}</p>
              <div className="mt-4 flex items-center justify-center gap-4 xl:justify-normal">
                <Link href="#">
                  <FacebookOutlined className="hover:text-accent-danger! text-xl text-black! transition duration-200" />
                </Link>
                <Link href="#">
                  <TwitterOutlined className="hover:text-accent-danger! text-xl text-black! transition duration-200" />
                </Link>
                <Link href="#">
                  <InstagramOutlined className="hover:text-accent-danger! text-xl text-black! transition duration-200" />
                </Link>
                <Link href="#">
                  <LinkedinOutlined className="hover:text-accent-danger! text-xl text-black! transition duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default AboutCarousel;
