import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React from "react";

const WebSearchPage = async ({ searchParams }) => {
  const startIndex = searchParams.start || 1;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.q}&start=${startIndex}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  const result = data.items;
  if (!result) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-4xl mb-4">
          No results found for &quot;{searchParams.q}&quot;
        </h1>
        <p className="text-lg">
          Please try searching for something else or go back to{" "}
          <Link href="/" className="text-blue-500 ">
            the homepage
          </Link>
        </p>
      </div>
    );
  }
  return <div>{result.length > 0 && <WebSearchResults results={data} />}</div>;
};

export default WebSearchPage;
