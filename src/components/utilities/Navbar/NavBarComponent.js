"use client";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import NavBarLogin from "./NavBarLogin";
import NavBarUser from "./NavBarUser";

export default function NavBarComponent() {
  const [isLogged, setIsLogged] = useState(false)
  const [isLoading , setIsLoading] = useState(true)
  const [username, setUsername] = useState("")
  const Userlogged = useSelector((state)=>state.authReducer.logged)
  const UserProfile = useSelector((state)=>state.authReducer.user)
  useEffect(() => {
    setIsLogged(Userlogged);
  
    if (!UserProfile || !UserProfile.user) {
      setIsLoading(true);
    }
    else{
      setIsLoading(false)
      setUsername(UserProfile.user.username)
    }
  }, [Userlogged, UserProfile]);
  
 if(isLogged){
  return <NavBarUser username={username} isLoading={isLoading}/>
 }
 else{
  return <NavBarLogin/>
 }

}
