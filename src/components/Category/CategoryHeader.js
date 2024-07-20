import Link from "next/link"
export default function CategoryHeader() {
  return (
    <header className=' w-full bg-lsecondary py-6'>
        <ul className=' container   mx-auto   flex gap-3 sm:gap-6  text-ltext   text-lg'>
            <li className='hover:text-laccent'><Link href={`/products?query=`}>All</Link></li>
            <li className='hover:text-laccent'><Link href={'/products?query=routers'}>Routers</Link></li>
            <li className='hover:text-laccent'><Link href={'/products?query=laptops'}>Laptops</Link></li>
            <li className='hover:text-laccent'><Link href={'/products?query=smart'}>Smart Watch</Link></li>
            <li className='hover:text-laccent'><Link href={'/products?query=telvisions'}>Telvisions</Link></li>
            <li className='hover:text-laccent'><Link href={'/products?query=accessories'}>Accessories</Link></li>
            <li className='hover:text-laccent'><Link href={'/products?query=mobiles'}>Mobiles</Link></li>
           
        </ul>
    </header>
  )
}
