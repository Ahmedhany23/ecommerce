import React from "react";
import Link from "next/link";
export default function LoginPage() {
  return (
    <main className=" bg-lbackground h-screen flex py-32 justify-center ">
      <form className="flex flex-col   gap-10 w-[400px] h-fit py-10">
        <h1 className="text-laccent text-3xl font-bold  text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          id=""
          className=" text-center w-full   px-1 py-1 rounded-md outline-2 outline-laccent"
          placeholder="Email"
        />

        <input
          type="password"
          name="email"
          id=""
          className=" text-center w-full px-1 py-1 rounded-md  outline-2 outline-laccent"
          placeholder="Password"
        />
        <button type="submit" className="text-xl text-white w-full bg-lsecondary py-1 rounded-lg hover:bg-laccent duration-150">Login</button>
        <div className="flex gap-2 flex-col sm:flex-row"><p className="text-lg text-ltext">Don&apos;t have an account?</p><Link className="text-lg text-laccent" href="/Auth/signup">Sign up</Link></div>
      </form>
    </main>
  );
}
