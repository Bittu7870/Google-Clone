"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationButton = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerms = searchParams.get("q");
  const searchIndex = +searchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:pb-0">
      {searchIndex >= 10 && (
        <Link href={`${pathName}?q=${searchTerms}&start=${searchIndex - 10}`}>
          <div className="flex flex-col items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {searchIndex <= 90 && (
        <Link href={`${pathName}?q=${searchTerms}&start=${searchIndex + 10}`}>
          <div className="flex flex-col items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButton;
