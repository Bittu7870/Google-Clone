/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageSearchResult = ({ results }) => {
  return (
    <div className="sm:pb-24 pb-40 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-4 px-3">
        {results.items.map((item, index) => (
          <div className="mb-8" key={index}>
            <div className="group">
              <Link href={item.image.contextLink}>
                <img
                  src={item.link}
                  alt={item.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
                />
              </Link>
              <Link href={item.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {item.title}
                </h2>
              </Link>
              <Link href={item.image.contextLink}>
                <p className="group-hover:underline truncate text-gray-600">
                  {item.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchResult;
