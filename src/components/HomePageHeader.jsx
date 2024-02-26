import React from "react";
import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomePageHeader = () => {
  return (
    <>
      <header className="flex justify-end p-5 text-sm">
        <div className="flex items-center space-x-4">
          <Link href={"https://mail.google.com"} className="hover:underline">
            Gmail
          </Link>
          <Link href={"https://image.google.com"} className="hover:underline">
            Images
          </Link>
          <TbGridDots className="bg-transparent hover:bg-gray-200 text-4xl p-2 rounded-full cursor-pointer " />
          <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:brightness-105 hover:shadow-md font-medium transition-shadow  ">
            Sign in
          </button>
        </div>
      </header>
    </>
  );
};

export default HomePageHeader;
