import BrandCard from "@/components/Brand/BrandCard"
import Subtitle from '../utilities/Subtitle'

export default function BrandFeatured({title}) {
  return (
    <div  className="py-4 container mx-auto flex flex-col justify-center gap-5">
    <Subtitle title={title}/>

    <div className='mx-auto md:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center place-content-center'>
    <BrandCard/>
    <BrandCard/>
    <BrandCard/>
    <BrandCard/>
    <BrandCard/>
    </div>

    </div>
  )
}
