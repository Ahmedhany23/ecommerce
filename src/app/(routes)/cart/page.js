"use client";
import ProductCard from "@/components/Product/ProductCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useState } from "react";
import ProductContainer from "@/components/Product/ProductContainer";
import {
  Paper,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import { useSelector } from "react-redux";
export default function Cartpage() {
  const { selectedProducts, selectedProductsID } = useSelector(
    (state) => state.carttt
  );
  let price = 0 ;
  return (
    <main className=" py-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 ">
        {selectedProducts.map((product) => {
          price += Number(product.attributes.price) * Number(product.quantity)
          return(

            <div key={product.id}>
            <ProductCard
              products={product}
              id={product.id}
              image={product.attributes.images.data[0].attributes.url}
              description={product.attributes.description}
              price={product.attributes.price}
              rate={product.attributes.rate}
            />
          </div>
          );
        }
         
      
        )}
      </div>

      <Paper sx={{ width: "200px", mx: "auto", mt: "60px" }}>
        <Typography align="center" p={2} variant="h6">
          Cart Summary
        </Typography>

        <Divider />

        <Stack
          sx={{ justifyContent: "space-between", p: 1.2 }}
          direction={"row"}
        >
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">${price}</Typography>
        </Stack>

        <Divider />

       <button className="text-center w-full text-2xl text-ltext py-3 bg-lsecondary hover:bg-laccent">
        Checkout    
       </button>
      </Paper>
    </main>
  );
}
