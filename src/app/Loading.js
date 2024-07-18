"use client"
import Lottie from "lottie-react";
import loading from "@/animation/loading"
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center relative">
    <Lottie animationData={loading} loop={true} width={250} height={250}  />
    </div>

    
  )
}
