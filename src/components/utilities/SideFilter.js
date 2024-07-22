"use client";

import { getProductsByCategorie } from "@/app/redux/actions/productsAction";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function SideFilter() {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: '', to: '' });

  useEffect(() => {
    const query = [...selectedCategories, ...selectedBrands].join(',');
    const { from, to } = priceRange;
    dispatch(getProductsByCategorie(query, from, to));
  }, [dispatch, selectedCategories, selectedBrands, priceRange]);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prev) => 
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleBrandChange = (event) => {
    const { value, checked } = event.target;
    setSelectedBrands((prev) => 
      checked ? [...prev, value] : prev.filter((brand) => brand !== value)
    );
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col py-10">
      <div className="category text-white flex flex-col gap-2">
        <h4 className="text-2xl pb-3 font-semibold">Category</h4>
        {['routers', 'laptops', 'smart', 'telvisions', 'accessories', 'mobiles'].map((category) => (
          <div key={category} className="flex gap-2">
            <input
              onChange={handleCategoryChange}
              type="checkbox"
              value={category}
            />
            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          </div>
        ))}
      </div>
      <div className="category text-white flex flex-col gap-2 py-7">
        <h4 className="text-2xl pb-3 font-semibold">Brand</h4>
        {['apple', 'samsung'].map((brand) => (
          <div key={brand} className="flex gap-2">
            <input
              onChange={handleBrandChange}
              type="checkbox"
              value={brand}
            />
            <p>{brand.charAt(0).toUpperCase() + brand.slice(1)}</p>
          </div>
        ))}
      </div>
      <div className="text-ltext flex flex-col gap-2 py-7">
        <h4 className="text-2xl pb-3 font-semibold">Price</h4>
        <div className="flex gap-2">
          <p>From</p>
          <input
            type="text"
            className="w-20 text-lprimary"
            name="from"
            onChange={handlePriceChange}
            value={priceRange.from}
          />
        </div>
        <div className="flex gap-[26px]">
          <p>To</p>
          <input
            type="text"
            className="w-20 text-lprimary px-1"
            name="to"
            onChange={handlePriceChange}
            value={priceRange.to}
          />
        </div>
      </div>
    </div>
  );
}
