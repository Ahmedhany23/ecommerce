import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";



export default function NavBarLogin() {


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

        <div className="hidden md:block w-full">
          <input
            type="search"
            name="search"
            className="w-full px-2 outline-none py-1"
            id=""
            placeholder="search.."
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <Link
              className="flex items-center gap-2 rounded-md bg-lsecondary px-5 py-2.5 text-sm font-medium text-white transition  hover:bg-laccent "
              href="/Auth/login"
            >
              <IoIosLogIn className="text-lg" />
              Login
            </Link>

            <a
              className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium hover:bg-lsecondary hover:text-ltext sm:flex sm:items-center sm:gap-2 "
              href="#"
            >
              <LuShoppingCart className="text-lg" />
              Cart
            </a>
          </div>

          <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
