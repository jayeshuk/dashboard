import React from "react";
import CoinCard from "../components/CoinCard";
import { useOutletContext } from "react-router-dom";

function Display() {
  const [coinData] = useOutletContext();

  const coinDataSliced = coinData?.slice(0, 8);

  return (
    <div className=" w-[100%] pl-10">
      <div className="m-10 flex row">
        <img
          src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
          alt="coin-icon"
          width={24}
        />
        <h5 className="font-semibold ml-2 text-xl font-serif">My Cryptos</h5>
      </div>
      <div className="flex row flex-wrap">
        {coinDataSliced?.map((coin) => (
          <CoinCard coin={coin} key={coin.uuid} />
        ))}
      </div>
    </div>
  );
}

export default Display;
