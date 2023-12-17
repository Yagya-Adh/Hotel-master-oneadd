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
      <div className="flex  justify-between   ">
        <div className="">
            <Bttn clicKS={CreateHand} BtNam={"Create Order" } />
          <Bttn clicKS={showHand} BtNam={"List Order"} />
        </div>
        <OrderPlace />
      </div>
      <div className="p-2 my-2 border-t-2">
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
