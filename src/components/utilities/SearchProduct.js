"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function SearchProduct() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/search?query=${inputValue}`);
  }
  return (
    <form onSubmit={handleSubmit} className="hidden md:block w-full">
      <input
        onChange={handleChangeInput}
        value={inputValue}
        type="search"
        name="search"
        className="w-full px-2 outline-none py-1"
        id=""
        placeholder="search.."
      />
    </form>
  );
}
