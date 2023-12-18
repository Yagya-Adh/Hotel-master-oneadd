import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const OrderPlace = () => {
  const [fall, setFall] = useState(false);
  const dropDown = () => {
    setFall(fall);
  };
  return (
    <div className="">
      <FaBell />
    </div>
  );
};

export default OrderPlace;
