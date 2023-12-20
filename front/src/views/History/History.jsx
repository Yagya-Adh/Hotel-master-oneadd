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
    <div className="flex justify-end h-screen">
      <div className="border w-1/2 mx-4 bg-slate-200 p-1">
        <HistoryVisitor />
      </div>

      <div className="border w-1/3   bg-slate-200 p-1">
        <h1 className="text-xl"> Record map </h1>
        <div className="flex justify-between">
          <Btn btnname={"Sales"} click={btnClick} />
          <Btn btnname={"Perchase"} click={btnClickper} />
        </div>

        {!clk && <SalesLits />}
        {!clkper && <PerChase />}

        <span className="text-gray-500">
          Our sale and perchase statement summary.
        </span>
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
