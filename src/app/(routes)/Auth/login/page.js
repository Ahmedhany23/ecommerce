"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
export default function LoginPage() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const [user, loading ] = useAuthState(auth);

 
  useEffect(() => {
    if (user) {
     
        router.push("/");
 
    }
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setConfirmed(true)
        setTimeout(()=>{ router.push("/");},2000)
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        switch (errorCode) {
          case "auth/invalid-email":
            setError("Wrong Email");
            break;

          case "auth/user-not-found":
            setError("Wrong Email");
            break;

          case "auth/wrong-password":
            setError("Wrong Password");
            break;

          case "auth/too-many-requests":
            setError("Too many requests, please try aganin later");
            break;

          default:
            setError("Please check your email & password");
            break;
        }
      });
  };

  return (
    <main className="bg-lbackground h-screen flex py-32 justify-center relative">
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-full px-4 sm:px-0 gap-10 sm:w-[400px] h-fit py-10"
      >
        <h1 className="text-laccent text-3xl font-bold text-center">Login</h1>

        {error && <p className="text-laccent text-center">{error}</p>}

        <input
          type="email"
          name="email"
          id="email"
          className="text-center w-full px-1 py-1 rounded-md outline-2 outline-laccent"
          placeholder="Email"
          required
        />

        <input
          type="password"
          name="password"
          id="password"
          className="text-center w-full px-1 py-1 rounded-md outline-2 outline-laccent"
          placeholder="Password"
          required
        />

        <button
          type="submit"
          className="text-xl text-white w-full bg-lsecondary py-1 rounded-lg hover:bg-laccent duration-150"
        >
          Login
        </button>

        <div className="flex gap-2 flex-col sm:flex-row">
          <p className="text-lg text-ltext">Don&apos;t have an account?</p>
          <Link className="text-lg text-laccent" href="/Auth/signup">
            Sign up
          </Link>
        </div>
        <div className="flex gap-2 flex-col sm:flex-row">
          <p className="text-lg text-ltext">Login As </p>
          <Link className="text-lg text-laccent" href="/Admin/Auth/login">
            Admin
          </Link>
        </div>
      </form>
      {confirmed && (
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          className="text-laccent  absolute top-6 left-0 px-10 py-4 bg-ltext"
        >
          Login Success
        </motion.div>
      )}
    </main>
  );
}
