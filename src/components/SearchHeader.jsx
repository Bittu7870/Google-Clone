import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/googlelogo.png";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex items-center justify-between p-6 w-full">
        <Link href="/">
          <Image
            src={Logo}
            alt="google-logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="bg-transparent hover:bg-gray-200 text-4xl p-2 rounded-full cursor-pointer " />
          <TbGridDots className="bg-transparent hover:bg-gray-200 text-4xl p-2 rounded-full cursor-pointer " />
        </div>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:brightness-105 hover:shadow-md font-medium transition-shadow ml-2 ">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
