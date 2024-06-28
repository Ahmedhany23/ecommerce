import React from 'react'
import CategoryCard from './CategoryCard'
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
export default function CategorieContainer() {
  return (
    <div  className="py-10 container mx-auto flex flex-col justify-center gap-5">
 

    <div className='mx-auto md:px-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-10 items-center place-content-center'>
    {Category && (Category.map((c)=>(<CategoryCard key={c.title} img={c.img} title={c.title}/>)))}
    
    
    </div>

    </div>
  )
}