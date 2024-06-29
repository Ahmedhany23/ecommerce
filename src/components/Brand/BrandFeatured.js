"use client"
import BrandCard from "@/components/Brand/BrandCard"
import Subtitle from '../utilities/Subtitle'
import {getBrands} from '@/app/api/getBrands'
import { useEffect,useState } from "react"
export default function BrandFeatured({title}) {
  const [brands, setBrands] = useState([])
  useEffect(()=>{
    async function fetchData() {
      const BrandsResponse = await getBrands();
   setBrands(BrandsResponse.data)
    }
    fetchData();
  },[])
  return (
    <div  className="py-4 container mx-auto flex flex-col justify-center gap-5">
    <Subtitle title={title}/>

    <div className='mx-auto md:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center place-content-center'>
    {brands.length >= 1 && (brands.map((brand,index)=>(<><BrandCard key={index} image={brand.attributes.image.data[0].attributes.formats.thumbnail.url}/></>)))}
  
    </div>

    </div>
  )
}
