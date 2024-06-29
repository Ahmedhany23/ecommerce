import Image from "next/image";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
export default function ProductCard({image,description,price,rate,id}) {
  return (
    <div className=" w-[240px] rounded-md shadow-xl bg-white pb-5">
      <div className="relative px-2">
      <Link href={`products/${id}`}>
      <Image src={image} alt="image" className="" width={2000} height={2000}/>
      </Link>
        
        <div className=" absolute bottom-1 flex justify-between px-3 w-full">
        <p className=" flex gap-1 items-center">
          {rate} <IoStar className="text-md text-emerald-600 " />
        </p>
        <div className="w-[36px] h-[36px] shadow-md flex items-center rounded-md justify-center text-xl bg-white cursor-pointer hover:bg-slate-500 hover:text-white duration-200">
            <MdAddShoppingCart/>
        </div>
        </div>
        
      </div>
      <div className="px-2 flex flex-col">
        <p className="font-medium max-w-lg hover:text-[var(--maincolor)] duration-200 ">
        <Link href={`products/${id}`}>
        {description}
        </Link>
        
        </p>
        <p className="font-semibold text-lg">
          <span className="font-thin text-sm mr-1">EGP</span>{price}
        </p>
      </div>
    </div>
  );
}
