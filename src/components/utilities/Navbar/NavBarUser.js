"use client"
import Loading from "@/app/Loading";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import SearchProduct from "../SearchProduct";

export default function NavBarUser({ username, isLoading }) {
  return (
    <header className="bg-lbackground ">
      <div className="mx-auto flex h-16 container items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-ltext dark:text-dtext" href="/">
          <svg
            id="logo-39"
            width="50"
            height="40"
            viewBox="0 0 50 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
              className="ccompli2"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
              fill="var(--light-accent)"
              className="ccustom"
            ></path>
            <path
              d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
              className="ccompli2"
              fillOpacity="0.3"
              fill="var(--light-primary)"
            ></path>
          </svg>
        </Link>

        <SearchProduct/>

        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            <Link
              className="flex items-center gap-2 rounded-md bg-lsecondary px-5 py-2.5 text-sm font-medium text-white transition  hover:bg-laccent whitespace-nowrap "
              href="/Auth/login"
            >
              <CgProfile className="text-lg" />
              {isLoading ? <Loading /> : <p>Hi, {username}</p>}
            </Link>

            <Link
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium hover:bg-lsecondary hover:text-ltext flex items-center sm:gap-2 "
              href="/cart"
            >
              <LuShoppingCart className="text-lg" />
              Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
