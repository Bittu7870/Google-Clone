import React from "react";
import CountryLookup from "./CountryLookup";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 bg-[#f2f2f2] text-gray-900 text-sm w-full">
      <div className="border-b px-8 py-3 ">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 justify-between px-8 py-3 items-center">
        <ul className="flex space-x-6 items-center">
          <li className="hover:underline cursor-pointer ">About</li>
          <li className="hover:underline cursor-pointer ">Advertising</li>
          <li className="hover:underline cursor-pointer ">Business</li>
          <li className="hover:underline cursor-pointer ">How Search works</li>
        </ul>
        <ul className="flex space-x-6">
          <li className="hover:underline cursor-pointer ">Privacy</li>
          <li className="hover:underline cursor-pointer ">Terms</li>
          <li className="hover:underline cursor-pointer ">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
