import Parser from "html-react-parser";
import Link from "next/link";
import React from "react";
import PaginationButton from "./PaginationButton";

const WebSearchResults = ({ results }) => {
  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pl[5%] md:pl-[14%] lg:pl-52 ">
      <p className="text-gray-600 text-sm mb-5 mt-3 ">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime}seconds)
      </p>
      {results?.items.map((item, index) => (
        <div key={index} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link href={item.link}>{item.formattedUrl}</Link>
            <Link
              href={item.link}
              className="group-hover:underline decoration-blue-800 font-medium truncate text-blue-800 text-xl "
            >
              {item.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(item.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButton />
    </div>
  );
};

export default WebSearchResults;
