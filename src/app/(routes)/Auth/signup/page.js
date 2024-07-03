import Link from "next/link"

export default function Signup() {
  return (
    <main className="bg-lbackground h-screen flex py-32 justify-center ">
    <form className="flex flex-col   gap-10 w-[400px] h-fit py-10">
      <h1 className="text-laccent text-3xl font-bold  text-center">
        Signup
      </h1>
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
        name="email"
        id=""
        className=" text-center w-full px-1 py-1 rounded-md  outline-laccent"
        placeholder="Password"
      />
      <button type="submit" className="text-xl text-white w-full bg-lsecondary py-1 rounded-lg hover:bg-laccent duration-150">Signup</button>
      <div className="flex gap-2 flex-col sm:flex-row"><p className="text-lg text-ltext">Do you have an account?</p><Link className="text-lg text-laccent" href="/Auth/login">Login</Link></div>
    </form>
  </main>
  )
}
