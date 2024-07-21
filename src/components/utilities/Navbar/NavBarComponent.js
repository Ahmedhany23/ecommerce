"use client";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import NavBarLogin from "./NavBarLogin";
import NavBarUser from "./NavBarUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
export default function NavBarComponent() {
  const [user, loading, error] = useAuthState(auth);

  
 if(user){
  return <NavBarUser username={user.displayName} isLoading={loading}/>
 }
 else{
  return <NavBarLogin/>
 }

}
