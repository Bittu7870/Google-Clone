import React from "react";
import "../globals.css";
import SearchHeader from "@/components/SearchHeader";

const layout = ({ children }) => {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
};

export default layout;
