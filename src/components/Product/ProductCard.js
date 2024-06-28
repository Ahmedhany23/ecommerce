import Image from "next/image";
import iphone from "@/app/images/iphone.png";
import { IoStar } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
export default function ProductCard() {
  return (
    <div className=" w-[240px] rounded-md shadow-xl bg-white pb-5">
      <div className="relative px-2">
        <Image src={iphone} alt="image" className=""></Image>
        <div className=" absolute bottom-4 flex justify-between px-3 w-full">
        <p className=" flex gap-1 items-center">
          4.6 <IoStar className="text-md text-emerald-600 " />{" "}
        </p>
        <div className="w-[36px] h-[36px] shadow-md flex items-center justify-center text-xl bg-white cursor-pointer">
            <MdAddShoppingCart/>
        </div>
        </div>
        
      </div>
      <div className="px-2 flex flex-col">
        <p className="font-medium max-w-lg ">
          iPhone 15 Pro Max 256GB Natural Titanium 5G
        </p>
        <p className="font-semibold text-lg">
          <span className="font-thin text-sm mr-1">EGP</span>62,027
        </p>
      </div>
    </div>
  );
}
