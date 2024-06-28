import React from "react";
import Link from "next/link";
export default function LoginPage() {
  return (
    <main className="dark:bg-slate-900 h-screen flex py-32 justify-center ">
      <form className="flex flex-col   gap-10 w-[400px] h-fit py-10">
        <h1 className="dark:text-[#4F46E5] text-3xl font-bold  text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          id=""
          className=" text-center w-full   px-1 py-1 rounded-md outline-2 outline-[#4F46E5]"
          placeholder="Email"
        />

        <input
          type="password"
          name="email"
          id=""
          className=" text-center w-full px-1 py-1 rounded-md  outline-2 outline-[#4F46E5]"
          placeholder="Password"
        />
        <button type="submit" className="text-xl text-white w-full bg-[#4F46E5] py-1 rounded-lg hover:bg-slate-700 duration-150">Login</button>
        <div className="flex gap-2 flex-col sm:flex-row"><p className="text-lg dark:text-white">Don&apos;t have an account?</p><Link className="text-lg text-[#4F46E5]" href="/Auth/signup">Sign up</Link></div>
      </form>
    </main>
  );
}
