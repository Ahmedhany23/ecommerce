"use client";
import { LiaStarSolid } from "react-icons/lia";
import ReactStars from "react-rating-stars-component";
export default function RateContainer() {
  return (
    <div className="w-full dark:bg-slate-800 shadow-sm shadow-gray-400 px-10 text-white">
      <h3 className=" text-2xl border-b py-8 font-bold">
        Product Ratings & Reviews
      </h3>
      <p className="pt-10 text-xl font-semibold">Overall Rating</p>
      <p className="mt-1 text-3xl font-semibold ">4.7</p>
      <div className="text-[var(--maincolor)] text-lg flex gap-1 ">
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid className="text-slate-600" />
      </div>
      <p className="text-sm text-slate-400 py-1">Based on 454 ratings</p>
      <div className="py-10">
        <div className="Rating flex gap-5 items-center">
          <h4 className="text-lg py-5">Ahmed Hany</h4>
          <ReactStars
            count={5}
            size={24}
            activeColor="#4F46E5"/>
        </div>
        <textarea name="" id="" className="rounded-md w-full min-h-[40px] text-black p-1 outline-[var(--maincolor)]"></textarea>

        {/* Reviews with Comments */}
        <div className="Reviews border-y border-y-slate-400 py-2 mt-10 flex flex-col">
            <p className="font-bold text-lg ">Ahmed Hany </p>
            <span className=" text-md font-medium">I like the color. It&apos;s the same size of iphone 14 pro max but less heavy..thank you noon looking forward to another transaction</span>
        </div>
      </div>
    </div>
  );
}
