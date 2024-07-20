import Image from "next/image"
import Link from "next/link"
export default function CategoryCard({img,title}) {
  return (
    <div className=' my-4 flex flex-col  gap-5 '>
        <div className='mb-3 relative flex flex-col items-center'>
            <Link href={`/categories?query=${title}`} className='  rounded-full w-36 h-36 relative bg-lsecondary flex items-center text-center justify-center '>
            <Image src={img} alt="image" className=" max-w-[120px] maw-h-[100px]  " width={1000} height={1000}  priority/>
            </Link>
           
            <p className="text-ltext text-lg text-center ">{title}</p>
        </div>
    </div>
  )
}
