"use client";
import CategoryCard from "./CategoryCard";



export default function CategorieContainer({categories}) {

  return (
    <div className="py-10 container mx-auto flex flex-col justify-center gap-5">
      <div className="mx-auto gap-10 md:px-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-32 items-center place-content-center">
        {categories && categories.map((c, i) => (
          <CategoryCard
            key={i}
            img={c.attributes.image.data.attributes.formats.thumbnail.url}
            title={c.attributes.title}
          />
        ))}
      </div>
    </div>
  );
}
