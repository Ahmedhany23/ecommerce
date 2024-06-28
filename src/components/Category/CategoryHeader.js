import React from 'react'
import "./style.css"
export default function CategoryHeader() {
  return (
    <header className=' w-full  dark:bg-slate-950 py-6'>
        <ul className=' container  mx-auto flex gap-10  dark:text-white text-lg'>
            <li>All</li>
            <li>Clothes</li>
            <li>Beauty</li>
            <li>Laptops</li>
            <li>Sale</li>
            <li>Kitchen</li>
        </ul>
    </header>
  )
}
