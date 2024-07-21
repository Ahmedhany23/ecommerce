"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CreateUser } from "@/app/redux/actions/authAction";
import { useDispatch,useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
export default function Signup() {
  const router = useRouter();
  const [firebaseError, setfirebaseError] = useState(false);
  const [verfied,setVerfied] = useState(false);
  const [user, loading, error] = useAuthState(auth);

 
  useEffect(() => {
    if (user) {
      if (user.emailVerified) {
        router.push("/Auth/login");
      }
    }
  });

  const handleSignup =  (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const {username,email,password} = Object.fromEntries(formData);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser).then(() => {
        setVerfied(true)
      });

      updateProfile(auth.currentUser, {
        displayName: username,
      })
        .then(() => {
          setTimeout(() => {
            router.push("/Auth/login");
           }, 3000);
        })
        .catch((error) => {
          console.log(error.code);
          // ...
        });

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      sethasError(true);

      switch (errorCode) {
        case "auth/invalid-email":
          setfirebaseError("Wrong Email");
          break;

        case "auth/user-not-found":
          setfirebaseError("Wrong Email");
          break;

        case "auth/wrong-password":
          setfirebaseError("Wrong Password");
          break;

        case "auth/too-many-requests":
          setfirebaseError("Too many requests, please try aganin later");
          break;

        default:
          setfirebaseError("Please check your email & password");
          break;
      }
    });
  };
    

  return (
    <main className=" relative bg-lbackground h-screen flex py-32 justify-center ">
      <form
        onSubmit={handleSignup}
        className="flex flex-col w-full px-4 sm:px-0 gap-10 sm:w-[400px] h-fit py-10"
      >
        <h1 className="text-laccent text-3xl font-bold  text-center">Signup</h1>
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
      {user && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="text-laccent  absolute top-6 left-0 px-10 py-4 bg-ltext"
        >
           Account Created
        </motion.div>
      )}
      {firebaseError && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="text-laccent  absolute top-6 left-0 px-10 py-4 bg-ltext"
        >
           {firebaseError}
        </motion.div>
      )}
      {verfied && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{delay:2}}
          className="text-laccent  absolute top-6 left-0 px-10 py-4 bg-ltext"
        >
           Email verification sent!
        </motion.div>
      )}

    </main>
  );
}
