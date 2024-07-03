import React from 'react'
export default function CategoryHeader() {
  return (
    <header className=' w-full bg-lsecondary py-6'>
        <ul className=' container   mx-auto   flex gap-3 sm:gap-6  text-ltext   text-lg'>
            <li className='hover:text-laccent'>All</li>
            <li className='hover:text-laccent'>Clothes</li>
            <li className='hover:text-laccent'>Beauty</li>
            <li className='hover:text-laccent'>Laptops</li>
            <li className='hover:text-laccent'>Sale</li>
            <li className='hover:text-laccent'>Kitchen</li>
        </ul>
    </header>
  )
}
