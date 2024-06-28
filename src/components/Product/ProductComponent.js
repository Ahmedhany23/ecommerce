import React from 'react'
import ProductCard from './ProductCard'
import Subtitle from '../utilities/Subtitle'

export default function ProductComponent({title,btnTitle}) {
  return (
    <div  className="py-10 container mx-auto flex flex-col justify-center gap-5">
    <Subtitle title={title} btnTitle={btnTitle}/>

    <div className='mx-auto md:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center place-content-center'>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    </div>

    </div>
  )
}
