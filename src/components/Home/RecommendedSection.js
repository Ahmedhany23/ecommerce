"use client";
import { getProducts } from "@/app/redux/actions/productsAction";
import ProductComponent from "@/components/Product/ProductComponent";
import { useEffect,useState } from "react";
import Loading from "@/app/Loading";
import { useQuery } from "react-query";
import { useDispatch,useSelector } from "react-redux";
export default function RecommendedSection() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.data.products);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
         dispatch(getProducts());
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      console.log(products);
    }
  }, [products]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }


    if(products){
      return (
        <div>
          <ProductComponent
            title={"Recommended for you"}
            btnTitle={"See More"}
            path="/products"
            products={products}
          />
        </div>
      );
    }
 
}
