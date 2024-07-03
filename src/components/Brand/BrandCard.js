import Image from "next/image";
import Lg from "@/app/images/Lg.png";
export default function BrandCard({ image }) {
  return (
    <div className="  rounded-md  ">
      <div className="relative px-2 w-full  h-36">
        <Image
          src={image}
          alt="image"
          width={1000}
          height={1000}
          className="h-full"
        ></Image>
      </div>
    </div>
  );
}
