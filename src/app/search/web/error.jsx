"use client";

import React, { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    console.log("====================================");
    console.log("error:", error);
    console.log("====================================");
  }, [error]);
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-3xl mb-4">Something went wrong!</h1>
      <p className="text-blue-500">Try again</p>
    </div>
  );
};

export default Error;
