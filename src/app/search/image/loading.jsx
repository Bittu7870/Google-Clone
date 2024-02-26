import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col sm:flex-row space-x-4 w-max-3xl pt-10 mx-2 lg:pl-52 pb-42 ">
      <div className="animate-pulse ">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse ">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse ">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
      <div className="animate-pulse ">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
        <div className="h-3 w-48 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default loading;
