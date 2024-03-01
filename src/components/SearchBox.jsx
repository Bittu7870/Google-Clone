"use client";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const queryParams = useSearchParams();
  const router = useRouter();
  const queryValue = queryParams.get("q");
  const [searchQuery, setSearchQuery] = useState(queryValue ||"");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    router.push(`/search/web?q=${searchQuery}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full px-6 py-3 items-center shadow-lg ml-10 mr-5 flex-grow max-w-3xl "
    >
      <input
        type="text"
        className="w-full focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2 "
        onClick={() => setSearchQuery("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-3 cursor-pointer " />
      <AiOutlineSearch
        className="text-2xl text-blue-500 hidden sm:inline-flex cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SearchBox;
