import Image from "next/image"

export default function CategoryCard({img,title}) {
  return (
    <div className=' my-4 flex flex-col  gap-5 '>
        <div className='mb-3 relative flex flex-col items-center'>
            <div className='category-card bg-slate-900 dark:bg-slate-400  rounded-full w-36 h-36 relative  flex items-center justify-center '>
            <Image src={img} alt="image" className=" max-w-[110px] maw-h-[100px]  " />
            </div>
           
            <p className="dark:text-white text-lg text-center ">{title}</p>
        </div>
    </div>
  )
}
