import { ProductCardSkeleton } from "@/src/components/ui/ProductCardSkeleton";

export const ProductFallbackLoader = () => (
  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);
