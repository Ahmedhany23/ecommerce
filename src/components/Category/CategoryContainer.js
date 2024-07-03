"use client"
import CategoryCard from './CategoryCard'
import clothe from "@/app/images/clothe.png";
import cat2 from "@/app/images/cat2.png";
import labtop from "@/app/images/labtop.png";
import sale from "@/app/images/sale.png";
import pic from "@/app/images/pic.png";
import { useState,useEffect } from 'react';
import { getCategories } from '@/app/api/getCategories';
import Loading from '@/app/Loading';
const Category = [
  { img: clothe, title: "Clothes" },
  { img: cat2, title: "Beauty" },
  { img: labtop, title: "Laptops" },
  { img: sale, title: "Sale" },
  { img: pic, title: "Kitchen" },
];
export default function CategorieContainer() {
  const [categories, setcategories] = useState(null);
  useEffect(()=>{
    const fetchData = async () => {
      const Categories =  await getCategories();
      setcategories(Categories.data);
    }
    fetchData();
  },[])
  if(!categories){
    return <Loading/>
  }
  if(categories){
    return (
      <div  className="py-10 container mx-auto flex flex-col justify-center gap-5">
   
  
      <div className='mx-auto md:px-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-32 items-center place-content-center'>
      {categories &&(categories.map((c,i)=>(<CategoryCard key={i} img={c.attributes.image.data.attributes.formats.thumbnail.url} title={c.attributes.title}/>)))}
      
      
      </div>
  
      </div>
    )
  }
  
}