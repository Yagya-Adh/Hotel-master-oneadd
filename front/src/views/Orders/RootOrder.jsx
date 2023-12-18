import React, { useState } from "react";

import OrderView from "./Ordering/OrderView";
import OrderCreate from "./Ordering/OrderCreate";
import OrderPlace from "./Ordering/OrderPlace";

const RootOrder = () => {
  const [create, setCreate] = useState(false);
  const [shows, setShows] = useState(false);

  const CreateHand = () => {
    setCreate(!create);
  };
  const showHand = () => {
    setShows(!shows);
  };

  return (
    <div>
      <div className="relative flex justify-around w-full shadow-lg overflow-hidden ">
        <div className="w-full overflow-hidden">
          <Bttn clicKS={CreateHand} BtNam={"Create Order"} />
          <Bttn clicKS={showHand} BtNam={"List Order"} />
        </div>

        <div className="m-2 bg-rose-600 p-2 hover:bg-green-500">
          <OrderPlace />
        </div>
      </div>

      <div className="w-full overflow-hidden shadow-lg p-1 rounded-sm my-3">
        {create && <OrderCreate />}
        {shows && <OrderView />}
      </div>
    </div>
  );
};

export default RootOrder;

const Bttn = ({ clicKS, BtNam }) => {
  return (
    <button
      className="border p-2 rounded-sm m-1 hover:bg-neutral-300"
      onClick={clicKS}
    >
      {BtNam}
    </button>
  );
};
