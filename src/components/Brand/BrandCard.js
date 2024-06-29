import Image from "next/image";
import Lg from "@/app/images/Lg.png";
export default function BrandCard({image}) {
  return (
    <div className=" w-[240px] rounded-md shadow-xl bg-white ">
      <div className="relative px-2 w-full h-[170px]">
        <Image src={image} alt="image" width={1000} height={1000} className="h-full"></Image>
        
      </div>
    </div>
  );
}
