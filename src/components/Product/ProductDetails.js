import ProductGallery from "./ProductGallery"
import ProductText from "./ProductText"

export default function ProductDetailsComponent() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 ">
    <ProductGallery />
    <ProductText/>
    </div>
  )
}
