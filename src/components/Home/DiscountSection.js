import React from 'react'
import Image from 'next/image'
import laptop from "../../app/images/laptop1.png"
export default function DiscountSection() {
  return (
    <div className='container mx-auto py-10'>
        <div className='my-3 text-center items-center flex w-full h-[130px] rounded-lg bg-gradient-to-r  from-lsecondary flex-row justify-around'>
        <p className='md:text-xl font-bold leading-8 text-white'>LAPTOPS UP TO 70%</p>
        <Image src={laptop} alt='laptop' className='maw-h-[130px] max-w-[80%]'/>
        </div>
    </div>
  )
}
