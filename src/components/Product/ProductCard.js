"use client";
import Loading from "@/app/Loading";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/app/redux/cartslice/cartSlice";
import { Badge } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: "black",
    backgroundColor: "white",
  },
}));

export default function ProductCard({
  image,
  description,
  price,
  rate,
  id,
  products,
}) {
  const dispatch = useDispatch();
  const { selectedProducts, selectedProductsID } = useSelector(
    (state) => state.carttt
  );
  const product = (id) => {
    const myProduct = selectedProducts.find((itemUser) => {
      return itemUser.id === products.id;
    });
    return myProduct.quantity;
  };
  return (
    <div className=" mx-auto  w-[230px] sm:w-[240px] rounded-md shadow-xl  bg-lsecondary pb-5 ">
      {image ? (
        <>
          <div className="relative px-2">
            <Link href={`products/${id}`}>
              <Image
                src={image}
                alt="image"
                className="h-[300px]"
                width={2000}
                height={2000}
              />
            </Link>

            <div className=" absolute left-0 bottom-1 flex justify-between px-2 w-full">
              <p className=" flex gap-1 items-center text-lg text-ltext">
                {rate} <IoStar className="text-md text-laccent " />
              </p>
              {selectedProductsID.includes(products.id) ? (
                <div className="flex gap-4 items-center">
                <IoIosRemove
                    className=" cursor-pointer text-lprimary"
                    onClick={() => {
                      dispatch(decreaseQuantity(products));
                    }}
                  />
                  <StyledBadge badgeContent={product(products.id)} color="white" />
                 
                   <IoMdAdd
                    className=" cursor-pointer text-lprimary"
                    onClick={() => {
                      dispatch(increaseQuantity(products));
                    }}
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    dispatch(addToCart(products));
                  }}
                  className="w-[36px] h-[36px] shadow-md flex items-center rounded-md justify-center text-xl bg-white cursor-pointer hover:bg-slate-500 hover:text-white duration-200"
                >
                  <MdAddShoppingCart />
                </div>
              )}
            </div>
          </div>
          <div className="px-2 flex flex-col">
            <p className="font-medium max-w-lg text-ltext hover:text-laccent duration-200 ">
              <Link href={`products/${id}`}>{`${description.slice(
                0,
                50
              )}..`}</Link>
            </p>
            <p className="font-semibold text-lg text-ltext">
              <span className="font-thin text-sm mr-1">EGP</span>
              {price}
            </p>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
