import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import CoinItem from "./CoinItem";
import { useNavigate } from "react-router-dom";

function Menu({ coinData }) {
  const navigate = useNavigate();

  return (
    <div className="px-5 py-5 border-1 h-[850px]">
      <div className="flex row items-center ">
        <BsChevronLeft onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
        <span className="m-2">Cryptos ({coinData.length})</span>
      </div>
      <div>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Search"
          autoComplete="given-name"
          className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <CoinItem data={coinData} />
      </div>
    </div>
  );
}

export default Menu;
