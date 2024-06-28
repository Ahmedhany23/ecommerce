import Image from "next/image";
import Lg from "@/app/images/Lg.png";
export default function ProductCard() {
  return (
    <div className=" w-[240px] rounded-md shadow-xl bg-white ">
      <div className="relative px-2">
        <Image src={Lg} alt="image" className=""></Image>
        
      </div>
    </div>
  );
}
