"use client";

import { getProductsByCategorie } from "@/app/redux/actions/productsAction";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function SideFilter() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceFrom: "",
    priceTo: ""
  });

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) => {
      const newCategories = checked
        ? [...prevFilters.categories, value]
        : prevFilters.categories.filter((category) => category !== value);

      return { ...prevFilters, categories: newCategories };
    });
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) => {
      const newBrands = checked
        ? [...prevFilters.brands, value]
        : prevFilters.brands.filter((brand) => brand !== value);

      return { ...prevFilters, brands: newBrands };
    });
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  useEffect(() => {
    const { categories, brands, priceFrom, priceTo } = filters;
    let query = [];

    if (categories.length > 0) {
      query.push(`categories=${categories.join(",")}`);
    }

    if (brands.length > 0) {
      query.push(`brands=${brands.join(",")}`);
    }

    const queryString = query.join(",");
    dispatch(getProductsByCategorie(queryString, priceFrom, priceTo));
  }, [filters, dispatch]);

  return (
    <div className="flex flex-col py-10">
      <div className="category text-white flex flex-col gap-2">
        <h4 className="text-2xl pb-3 font-semibold">Category</h4>
        <div className="flex gap-2">
          <input onChange={handleCategoryChange} type="checkbox" value=""/> <p>All</p>
        </div>
        <div className="flex gap-2">
          <input onChange={handleCategoryChange} type="checkbox" value="routers" /> <p>Routers</p>
        </div>
        <div className="flex gap-2">
          <input onChange={handleCategoryChange} type="checkbox" value="laptops" /> <p>Laptops</p>
        </div>
        <div className="flex gap-2">
          <input onChange={handleCategoryChange} type="checkbox" value="smart" /> <p>Smart Watch</p>
        </div>
        <div className="flex gap-2">
          <input onChange={handleCategoryChange} type="checkbox" value="telvisions" /> <p>Telvisions</p>
        </div>
        <div className="flex gap-2">
          <input onChange={handleCategoryChange} type="checkbox" value="accessories" /> <p>Accessories</p>
        </div>
        <div className="flex gap-2">
          <input onChange={handleCategoryChange} type="checkbox" value="mobiles" /> <p>Mobiles</p>
        </div>
      </div>
      <div className="category text-white flex flex-col gap-2 py-7">
        <h4 className="text-2xl pb-3 font-semibold">Brand</h4>
        <div className="flex gap-2">
          <input onChange={handleBrandChange} type="checkbox" value="" /> <p>All</p>
        </div>
        <div className="flex gap-2">
          <input onChange={handleBrandChange} type="checkbox" value="apple" /> <p>Apple</p>
        </div>
        <div className="flex gap-2">
          <input onChange={handleBrandChange} type="checkbox" value="samsung" /> <p>Samsung</p>
        </div>
      </div>
      <div className="text-ltext flex flex-col gap-2 py-7">
        <h4 className="text-2xl pb-3 font-semibold">Price</h4>
        <div className="flex gap-2">
          <p>From</p> <input type="text" className="w-20 text-lprimary" name="priceFrom" onChange={handlePriceChange} />
        </div>
        <div className="flex gap-[26px]">
          <p>To</p> <input type="text" className="w-20 text-lprimary px-1" name="priceTo" onChange={handlePriceChange} />
        </div>
      </div>
    </div>
  );
}
