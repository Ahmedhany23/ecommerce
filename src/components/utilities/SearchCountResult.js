"use client";
import { useState } from "react";

//icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
export default function SearchCountResult({ count = 6 }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleDropMenu = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="container mx-auto flex justify-between">
      <div className="count">
        <p className="text-white text-xl">{count} search results</p>
      </div>
      <div className="relative">
        <div
          className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900"
          onClick={handleDropMenu}
        >
          <a
            href="#"
            className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            SORT BY
          </a>

          <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 duration-300">
            <span className="sr-only">Menu</span>
            {isClicked ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
        </div>
        { isClicked &&
          <div
            className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                RECOMMENDED
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                PRICE: HIGH TO LOW
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                PRICE: LOW TO HIGH
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                NEW ARRIVALS
              </a>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
              >
                BEST RATED
              </a>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
