"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const route = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim("")) return;
    route.push(`/search?q=${input}`);
  };

  const handleRandomSearch = async () => {
    setRandomSearchLoading(true);
    const data = await fetch(`https://random-word-api.herokuapp.com/word`);
    const result = await data.json();
    route.push(`/search?q=${result[0]}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex w-full mx-auto mt-5 border border-gray-200 rounded-full px-5 py-3 hover:shadow-md focus-within:shadow-md transition-shadow max-w-[90%] sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 me-3" />
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow focus:outline-none"
        />
        <IoMdMic className="text-lg" />
      </form>
      <div className="mt-8 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 ">
        <button
          onClick={handleSearch}
          className="bg-[#F8F9FA] w-36 h-10 text-sm text-gray-800 rounded-md hover:ring-gray-200 hover:border-2 active:ring-gray-300 hover:shadow-md transition-shadow"
        >
          Google Search
        </button>
        <button
          onClick={handleRandomSearch}
          disabled={randomSearchLoading}
          className="bg-[#F8F9FA] w-36 h-10 text-sm text-gray-800 rounded-md hover:ring-gray-200 hover:border-2 active:ring-gray-300 hover:shadow-md transition-shadow disabled:shadow-sm disabled:opacity-80"
        >
          {randomSearchLoading ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
