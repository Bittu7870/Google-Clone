import React from "react";
import HomePageHeader from "@/components/HomePageHeader";
import Image from "next/image";
import Logo from "../../public/googlelogo.png";
import HomeSearch from "@/components/HomeSearch";

const page = () => {
  return (
    <>
      <HomePageHeader />
      <div className="flex flex-col items-center mt-24 ">
        <Image src={Logo} alt="google-logo" priority />
        <HomeSearch />
      </div>
    </>
  );
};

export default page;
