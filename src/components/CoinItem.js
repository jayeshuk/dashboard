import React from "react";
import { Link } from "react-router-dom";

function CoinItem({ data }) {
  return (
    <div className="mt-5">
      {data.map((coin) => {
        return (
          <Link to={`/coin/${coin.uuid}`} key={coin.uuid}>
            <div className="py-4 px-2 border-y-1  border-t-grey text-left">
              <div className="flex row items-center">
                <div>
                  <img src={coin.iconUrl} alt={coin.name} width={40} />
                </div>
                <div className="ml-5">
                  <p className="font-medium">{coin.symbol}</p>
                  <p className="text-gray-700 mt-2">{coin.name}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CoinItem;
