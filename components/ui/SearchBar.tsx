"use client";
import { Input } from "antd";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export const SearchBar = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/search?query=${inputValue}`, {
      scroll: false,
    });
  }
  return (
    <form
      onSubmit={handleSubmit}
    >
      <Input.Search
        value={inputValue}
        onChange={handleChangeInput}
        className="outline-none! border-none! h-full w-full! rounded-sm!"
        placeholder="What are you looking for?"
      />
    </form>
  );
};
