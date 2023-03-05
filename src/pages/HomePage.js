import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "eb3d61df06msh142275b5705fbe0p128cc5jsne77eb68de153",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export default function HomePage() {
  const [coinData, setCoinData] = useState([]);

  const fetchCoins = async () => {
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCoinData(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="flex row w-[100%]">
      <div className="overflow-y-scroll">
        <Menu coinData={coinData} />
      </div>
      <Outlet context={[coinData]} />
    </div>
  );
}
