import React, { useState } from "react";

const OrderCreate = () => {
  /*  const menuList = [
    {
      id: 1,
      rice: [
        { id: 1, name: "Plain Rice", price: "2.3", qty: 0, ordered: false },
        { id: 2, name: "Fry Rice", price: "3.2", qty: 0, ordered: false },
        { id: 3, name: "Motton Rice", price: "3.2", qty: 0, ordered: false },
        { id: 4, name: "Veg. Rice", price: "2.9", qty: 0, ordered: false },
        { id: 5, name: "Zira Rice", price: "1.2", qty: 0, ordered: false },
      ],
    },
  ]; */

  const Sumhand = (e) => {
    e.preventDefault();

    alert("thank you for your order !ok");
  };

  return (
    <div>
      <h1>Order</h1>

      <form onSubmit={Sumhand}>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">S.No</th>
              <th className="text-center">Items</th>
              <th className="text-center">price</th>
              <th className="text-center">Qty</th>
              <th className="text-center">
                order <small>checked to order</small>{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{"1"}</th>
              <th>{"ri.name"}</th>
              <th>${20}</th>
              <th>
                {/* <input type="range" min="1" max="5" className="in-range:border-green-500 " /> */}
                <input type="number" className="  px-4 checked:bg-blue-500 " />
              </th>

              <th>
                {/* <input type="range" min="1" max="5" className="in-range:border-green-500 " /> */}
                <input type="checkbox" className="px-4 checked:bg-blue-500" />
              </th>
            </tr>
          </tbody>
        </table>

        <div className="justify-end flex ">
          <button
            type="submit"
            className=" bg-neutral-400 border p-2 rounded-md hover:bg-neutral-300"
          >
         Place   Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderCreate;
