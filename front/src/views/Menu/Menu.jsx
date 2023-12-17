import React, { useState } from "react";
import SearchBox from "./SearchBox";
import HotelMenu from "./HotelMenu/HotelMenu";
import AddMenu from "./Addmenu/AddMenu";

const menuList = [
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
  {
    id: 2,
    momo: [
      { id: 1, name: "Open momo", price: "18" },
      { id: 2, name: "Normal momo", price: "12" },
      { id: 3, name: "Fry momo", price: "15" },
      { id: 4, name: "Steam momo", price: "13" },
    ],
  },
];

export default function Menu() {
  const [hotlemenu, setHotelMenu] = useState(false);
  const [addMenu, setAddMenu] = useState(false);

  const ClickyHotelMenu = () => {
    setHotelMenu(!hotlemenu);
  };

  const MenuAdd = () => {
    setAddMenu(!addMenu);
  };
  return (
    <div className="flex-col">
      <h1>Menu</h1>
      <div className="flex justify-between">
        <div>
          <Button click={MenuAdd} btnname={"Add New Menu "} />
          <Button click={ClickyHotelMenu} btnname={"Menu"} />
        </div>
        <div>
          <SearchBox />
        </div>
      </div>
      {addMenu && <AddMenu />}
      {hotlemenu && <HotelMenu />}
    </div>
  );
}

const Button = ({ click, btnname }) => {
  return (
    <button
      className="border p-2 rounded-sm m-1 hover:bg-neutral-300"
      onClick={click}
    >
      {btnname}
    </button>
  );
};
