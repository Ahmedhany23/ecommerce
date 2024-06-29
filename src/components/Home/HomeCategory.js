import React from "react";
import Subtitle from "../utilities/Subtitle";
import CategoryCard from "../Category/CategoryCard";
import clothe from "@/app/images/clothe.png";
import cat2 from "@/app/images/cat2.png";
import labtop from "@/app/images/labtop.png";
import sale from "@/app/images/sale.png";
import pic from "@/app/images/pic.png";

const Category = [
  { img: clothe, title: "Clothes" },
  { img: cat2, title: "Beauty" },
  { img: labtop, title: "Laptops" },
  { img: sale, title: "Sale" },
  { img: pic, title: "Kitchen" },
];

export default function HomeCategory() {
  return (
    <div className="container mx-auto dark:bg-slate-900 py-20 relative">
      <Subtitle title={"Categories"} />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center items-center place-content-center lg:ml-10">
        {Category &&
          Category.map((c) => (
            <>
              <CategoryCard key={c} img={c.img} title={c.title} />
            </>
          ))}
      </div>
    </div>
  );
}
