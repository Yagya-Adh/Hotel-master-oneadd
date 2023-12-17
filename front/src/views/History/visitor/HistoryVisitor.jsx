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
    <div className="absolute right-5">
      <div className="bg-green-600 p-5">
        <Quize />
      </div>
      <div className="relative flex">
        <container>
          <div>
            <input type="text" name="" id="" placeholder="search visitor" />
          </div>

          <div className="flex">
            <div className="border-2 m-2 p-1 col-span-4 ">
              <img src="" alt="" />
              <h1>Name: {Person.name}</h1>
              <h1>Phone: {Person.phone}</h1>
              <h1>Address: {Person.Address}</h1>
            </div>

            <div className="border-2 m-2 p-1 col-span-4  ">
              <img src="" alt="" />
              <h1>Name: {Person.name}</h1>
              <h1>Phone: {Person.phone}</h1>
              <h1>Address: {Person.Address}</h1>
            </div>

            <div className="border-2 m-2 p-1 col-span-4  ">
              <img src="" alt="" />
              <h1>Name: {Person.name}</h1>
              <h1>Phone: {Person.phone}</h1>
              <h1>Address: {Person.Address}</h1>
            </div>

            <div className="border-2 m-2 p-1 col-span-4  ">
              <img src="" alt="" />
              <h1>Name: {Person.name}</h1>
              <h1>Phone: {Person.phone}</h1>
              <h1>Address: {Person.Address}</h1>
            </div>
          </div>
        </container>
      </div>
    </div>
  );
};

export default HistoryVisitor;
