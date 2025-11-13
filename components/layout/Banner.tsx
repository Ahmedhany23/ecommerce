import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <div className=" bg-black">
      <div className="container mx-auto flex flex-row items-center justify-center gap-10 py-4 px-2 ">
        <p className="text-white font-normal sm:text-sm text-xs  font-poppins">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link
            className="ml-1 text-white sm:text-sm text-xs font-semibold decoration-white underline font-poppins"
            href="/products"
          >
            ShopNow
          </Link>
        </p>
        <select className=" text-xs sm:text-sm bg-black text-white">
          <option value="EN">English</option>
          <option value="AR">Arabic</option>
        </select>
      </div>
    </div>
  );
};
