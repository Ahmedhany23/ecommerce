"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByCategorie } from "@/app/redux/actions/productsAction";

// icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function SearchCountResult({ count }) {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const handleDropMenu = () => {
    setIsClicked(!isClicked);
  };

  const handleSortChange = (sortBy) => {
    setIsClicked(false);
    const query = "";
    const from = 0;  
    const to = 100000; 
    dispatch(getProductsByCategorie(query, from, to, sortBy));
  };

  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="count">
        <p className="text-white text-xl">{count} search results</p>
      </div>
      <div className="relative">
        <div
          className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900 cursor-pointer"
          onClick={handleDropMenu}
        >
          <span className="border-e px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200">
            SORT BY
          </span>
          <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200 duration-300">
            <span className="sr-only">Menu</span>
            {isClicked ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
        </div>
        {isClicked && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="p-2">
              <button
                className="block w-full text-left rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
                onClick={() => handleSortChange('priceHighToLow')}
              >
                PRICE: HIGH TO LOW
              </button>
              <button
                className="block w-full text-left rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
                onClick={() => handleSortChange('priceLowToHigh')}
              >
                PRICE: LOW TO HIGH
              </button>
              <button
                className="block w-full text-left rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                role="menuitem"
                onClick={() => handleSortChange('bestRated')}
              >
                BEST RATED
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
