import CategoryHeader from "@/components/Category/CategoryHeader";
import SearchCountResult from "@/components/utilities/SearchCountResult";

export default function Product() {
  return (
    <main className="h-full dark:bg-slate-900">
      <CategoryHeader />
      <SearchCountResult/>
    </main>
  );
}
