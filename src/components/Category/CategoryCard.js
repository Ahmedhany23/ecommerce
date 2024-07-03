import Image from "next/image"

export default function CategoryCard({img,title}) {
  return (
    <div className=' my-4 flex flex-col  gap-5 '>
        <div className='mb-3 relative flex flex-col items-center'>
            <div className='  rounded-full w-36 h-36 relative bg-lsecondary flex items-center justify-center '>
            <Image src={img} alt="image" className=" max-w-[110px] maw-h-[100px]  " />
            </div>
           
            <p className="text-ltext text-lg text-center ">{title}</p>
        </div>
    </div>
  )
}
