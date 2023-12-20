import React from "react";
import Quize from "yagya-quiz";

const HistoryVisitor = () => {
  const Person = {
    name: "yagya",
    phone: 9845803170,
    Address: "Bahratpur",
    Image: "imag.jpg",
  };

  return (
    <div className="">
      <div className="">
        <container>
          <div>
            <input type="text" name="" id="" placeholder="search visitor" />
          </div>

          <div className="flex">
            <div className="border-2 m-2 p-1 col-span-4 bg-lime-500 h-34 rounded-xl font-serif w-44">
              <div>
                <img src="" alt="" />
                <h1>Name: {Person.name}</h1>
                <h1>Phone: {Person.phone}</h1>
                <h1>Address: {Person.Address}</h1>
              </div>
              <button className="border-2 bg-gray-500 p-2 rounded-full">
                view <span>H</span>
              </button>
            </div>
          </div>
        </container>
      </div>
    </div>
  );
};

export default HistoryVisitor;
