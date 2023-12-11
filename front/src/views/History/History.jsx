import React, { useState } from "react";

import SalesLits from "./SalesList";
import PerChase from "./PerChase";
import HistoryVisitor from "./visitor/HistoryVisitor";

const History = () => {
  const [clk, setClk] = useState(true);
  const [clkper, setClkPer] = useState(true);

  const btnClick = () => {
    setClk(!clk);
  };
  const btnClickper = () => {
    setClkPer(!clkper);
  };

  return (
    <div className="flex">
      <div className=" border-r-4">
        <h1 className="text-xl"> Record map </h1>
        <div>
          <Btn btnname={"Sales"} click={btnClick} />
          <Btn btnname={"Perchase"} click={btnClickper} />
        </div>

        {!clk && <SalesLits />}
        {!clkper && <PerChase />}

        <span className="text-gray-500">
          Our sale and perchase statement summary.{" "}
        </span>
      </div>

      <div className="border-2 p-1 m-1 w-77 flex h-full justify-center">
        <HistoryVisitor />
      </div>
    </div>
  );
};

export default History;

const Btn = ({ click, btnname }) => {
  return (
    <button
      onClick={click}
      className="rounded-md mx-1 my-2 bg-neutral-400 hover:bg-neutral-600 p-2"
    >
      {btnname}
    </button>
  );
};
