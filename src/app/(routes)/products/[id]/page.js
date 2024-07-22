"use client";
import CategoryHeader from "@/components/Category/CategoryHeader";
import ProductDetailsComponent from "@/components/Product/ProductDetails";
import RateContainer from "@/components/Rate/RateContainer";
import { useParams } from "next/navigation";
import Loading from "@/app/Loading";
import { useGetOneProductQuery } from "@/app/redux/api/productsApi";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
export default function ProductDetails() {
  const [user, loading] = useAuthState(auth);
  const { id } = useParams();
  const { data, error, isLoading } = useGetOneProductQuery(id);

  if (error) {
    throw error(error.message);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    return (
      <main className=" bg-lbackground h-full">
        <CategoryHeader />
        <div className="container mx-auto py-10 flex flex-col gap-20">
          <ProductDetailsComponent product={data} />
          <RateContainer
            user={user ? user.displayName : "Guest"}
            rate={data.attributes.rate}
          />
        </div>
      </main>
    );
  }
}
