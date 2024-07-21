import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/app/redux/cartslice/cartSlice";
import { IoMdAdd, IoIosRemove } from "react-icons/io";

export default function ProductText({ products }) {
  const dispatch = useDispatch();
  const { selectedProducts, selectedProductsID } = useSelector(
    (state) => state.carttt
  );
  const product = (id) => {
    const myProduct = selectedProducts.find((itemUser) => {
      return itemUser.id === id;
    });
    return myProduct.quantity;
  };

  return (
    <div className="py-20">
      {products && (
        <>
          <h1 className="text-ltext text-xl font-semibold ">
            {products.attributes.title}
          </h1>
          <p className="text-ltext max-w-lg text-lg py-5">
            {products.attributes.description}
          </p>
          <p className="text-ltext text-lg">
            Price:{" "}
            <span className="font-bold">EGP {products.attributes.price}</span>
          </p>
          {selectedProductsID.includes(products.id) ? (
            <div className="flex gap-4 items-center mt-10">
              <IoMdAdd
                className=" cursor-pointer text-laccent text-3xl"
                onClick={() => {
                  dispatch(increaseQuantity(products));
                }}
              />
              <div className="w-8 h-5 rounded-full bg-lsecondary">
                <p className="text-center text-ltext">{product(products.id)}</p>
              </div>
              <IoIosRemove
                className=" cursor-pointer text-laccent text-3xl"
                onClick={() => {
                  dispatch(decreaseQuantity(products));
                }}
              />
            </div>
          ) : (

              <button
                onClick={() => {
                  dispatch(addToCart(products));
                }}
                className="mt-10 w-56 bg-lsecondary  py-3 text-white text-lg hover:bg-laccent"
              >
                Add to Cart
              </button>
            
          )}
        </>
      )}
    </div>
  );
}
