"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CreateUser } from "@/app/redux/actions/authAction";
import { useDispatch,useSelector } from "react-redux";

export default function Signup() {
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const dispatch =useDispatch();

  const router = useRouter();

  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    dispatch(CreateUser(jsonData))
  };
    const Newuser = useSelector((state)=>state.authReducer.newUser)

    useEffect(()=>{
      if (Newuser.error) {
        setError(Newuser.error);
        return;
      }
    
      if (Newuser.user && Newuser.jwt) {
        setConfirmed(true);
        setTimeout(() => {
          router.push("/Auth/login");
        }, 3000);
        clearTimeout();
      }
    
    },[Newuser,router])
  
  return (
    <main className=" relative bg-lbackground h-screen flex py-32 justify-center ">
      <form
        onSubmit={handleSignup}
        className="flex flex-col w-full px-4 sm:px-0    gap-10 sm:w-[400px] h-fit py-10"
      >
        <h1 className="text-laccent text-3xl font-bold  text-center">Signup</h1>
        {error && <p className="text-laccent text-center">{error}</p>}
        <input
          type="text"
          name="username"
          id=""
          className=" text-center w-full  px-1 py-1 rounded-md outline-laccent"
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          id=""
          className=" text-center w-full  px-1 py-1 rounded-md outline-laccent"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          id=""
          className=" text-center w-full px-1 py-1 rounded-md  outline-laccent"
          placeholder="Password"
        />
        <button
          type="submit"
          className="text-xl text-white w-full bg-lsecondary py-1 rounded-lg hover:bg-laccent duration-150"
        >
          Signup
        </button>
        <div className="flex gap-2 flex-col sm:flex-row">
          <p className="text-lg text-ltext">Do you have an account?</p>
          <Link className="text-lg text-laccent" href="/Auth/login">
            Login
          </Link>
        </div>
      </form>
      {confirmed && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="text-laccent  absolute top-6 left-0 px-10 py-4 bg-ltext"
        >
           Account Created
        </motion.div>
      )}
    </main>
  );
}
