"use client";
import Link from "next/link";
export default function error({error,reset}) {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
           <div className="text-center">
            <p className="text-base font-semibold text-emerald-700">
                There was a problem
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ltext sm:text-2xl">
                {error.message || 'Something went wrong'}
            </h1>
            <p className="mt-6 text-4xl leading-7 text-lsecondary">
                Please try again later or contact support if the problem presists
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <button onClick={reset} className="flex items-center gap-2 rounded-md bg-lsecondary px-5 py-2.5 text-sm font-medium text-white transition  hover:bg-laccent ">Try again</button>
            <Link href='/'  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium hover:bg-lsecondary hover:text-ltext flex items-center sm:gap-2">
                Go back home
            </Link>
            </div>
           </div>
    </main>
  )
}
