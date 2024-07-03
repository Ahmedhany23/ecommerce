import React from "react";
import Subtitle from "../utilities/Subtitle";
import CategoryCard from "../Category/CategoryCard";
import clothe from "@/app/images/clothe.png";
import cat2 from "@/app/images/cat2.png";
import labtop from "@/app/images/labtop.png";
import sale from "@/app/images/sale.png";
import pic from "@/app/images/pic.png";
import CategorieContainer from "../Category/CategoryContainer";

const Category = [
  { img: clothe, title: "Clothes" },
  { img: cat2, title: "Beauty" },
  { img: labtop, title: "Laptops" },
  { img: sale, title: "Sale" },
  { img: pic, title: "Kitchen" },
];

export default function HomeCategory() {
  return (
    <div className="container mx-auto py-8 relative">
      <Subtitle title={"Categories"} />

     <CategorieContainer/>
    </div>
  );
}
