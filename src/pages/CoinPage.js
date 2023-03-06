import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import axios from "axios";

function CoinPage() {
  const [coin, setCoin] = useState({});
  let { coinUUID } = useParams();

  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${coinUUID}`,
    headers: {
      "X-RapidAPI-Key": "eb3d61df06msh142275b5705fbe0p128cc5jsne77eb68de153",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  const fetchCoin = async () => {
    await axios(options)
      .then(function (response) {
        console.log("COIN", response.data);
        setCoin(response.data.data.coin);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchCoin();
  }, [coinUUID]);

  return (
    <div className="w-[900px] pl-10">
      <div className="flex row items-start mx-5 mt-20">
        <div>
          <img src={coin.iconUrl} alt={coin.name} width={40} />
        </div>
        <div className="ml-5">
          <p className="font-medium">{coin.name}</p>
          <p className="text-[#959DA5] mt-2">{coin.symbol}</p>
          <div className="mt-4">
            {parseFloat(coin?.change) > 0 ? (
              <h4 className="text-xl text-[#8BC34A] flex row items-center gap-2">
                {parseFloat(coin.change).toFixed(2)} <BsFillCaretUpFill />
              </h4>
            ) : (
              <h4 className="text-xl text-[#DB4949] flex row items-center gap-2">
                {parseFloat(coin.change).toFixed(2)} <BsFillCaretDownFill />{" "}
              </h4>
            )}

            <h6 className="text-sm">CHANGE</h6>
            <hr className="my-2" />

            <div className="flex row">
              <span className="pr-4">
                <span className="font-medium">4324.75</span>
                <br />
                <span className="font-light text-[#6A737D]">Buy</span>
              </span>
              <span className="border-l-1 pl-4  border-l-[#E1E4E8]">
                <span className="font-medium">4668.93</span> <br />
                <span className="font-light text-[#6A737D]">Sell</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="m-10 ml-20">
        <p className="mt-5">
          <span className="font-medium text-xl">Market Cap:</span>{" "}
          <span className="font-light text-lg text-[#252525]">{coin.marketCap}</span>
        </p>
        <p className="mt-5">
          <span className="font-medium text-xl">24-Hour Volume:</span>{" "}
          <span className="font-light text-lg text-[#252525]">{coin["24hVolume"]}</span>
        </p>
        <p className="mt-5">
          <span className="font-medium text-xl">All Time High:</span>{" "}
          <span className="font-light text-lg text-[#252525]">{coin?.allTimeHigh?.price}</span>
        </p>
        <p className="mt-5">
          <span className="font-medium text-xl">Description:</span>{" "}
          <span className="font-light text-lg text-[#252525] text-justify">
            {coin?.description}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CoinPage;
