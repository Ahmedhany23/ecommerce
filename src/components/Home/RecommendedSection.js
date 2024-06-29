"use client";
import ProductComponent from "@/components/Product/ProductComponent";
import { useEffect,useState } from "react";
import { getRecommend } from "@/app/api/getRecommended";
export default function RecommendedSection() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            const ProductsResponse = await getRecommend();
            setProducts(ProductsResponse.data)
            
        }
        fetchData();
    },[])
  return (
    <div>
      <ProductComponent
        title={"Recommended for you"}
        btnTitle={"See More"}
        path="/products"
        products={products}
      />
    </div>
  );
}
