"use client";

import React, { useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("");

  useState(() => {
    const getCountry = async () => {
      try {
        const response = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        );
        const data = await response.json();
        const countryName = data.city;

        setCountry(countryName);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
