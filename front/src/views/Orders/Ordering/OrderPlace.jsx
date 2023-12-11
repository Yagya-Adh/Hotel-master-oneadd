import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const OrderPlace = () => {
  const [fall, setFall] = useState(false);
  const dropDown = () => {
    setFall(fall);
  };
  return (
    <div>
      <div
        onClick={dropDown}
        className={true ? `text-rose-500  text-2xl` : `text-2xl`}
      >
        <FaBell />
        <select name="" id="">
          <option value="">ONE</option>
          <option value="">TWO</option>
          <option value="">THREE</option>
        </select>
      </div>
    </div>
  );
};

export default OrderPlace;
