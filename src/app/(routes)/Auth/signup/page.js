import Link from "next/link"

export default function Signup() {
  return (
    <main className="dark:bg-slate-900 h-screen flex py-32 justify-center ">
    <form className="flex flex-col   gap-10 w-[400px] h-fit py-10">
      <h1 className="dark:text-[#4F46E5] text-3xl font-bold  text-center">
        Signup
      </h1>
      <input
        type="text"
        name="username"
        id=""
        className=" text-center w-full  px-1 py-1 rounded-md outline-none"
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        id=""
        className=" text-center w-full  px-1 py-1 rounded-md outline-none"
        placeholder="Email"
      />

      <input
        type="password"
        name="email"
        id=""
        className=" text-center w-full px-1 py-1 rounded-md  outline-none"
        placeholder="Password"
      />
      <button type="submit" className="text-xl text-white w-full bg-[#4F46E5] py-1 rounded-lg hover:bg-slate-700 duration-150">Signup</button>
      <div className="flex gap-2 flex-col sm:flex-row"><p className="text-lg dark:text-white">Do you have an account?</p><Link className="text-lg text-[#4F46E5]" href="/Auth/login">Login</Link></div>
    </form>
  </main>
  )
}
