import React, { useState } from "react";

const AddMenu = () => {
  const [fooname, setFooName] = useState("");
  const [fooprice, setFooPrice] = useState("");
  const [fooimage, setFooImage] = useState("");

  const handleName = (e) => {
    setFooName(e.target.value);
  };
  const handlePrice = (e) => {
    setFooPrice(e.target.value);
  };
  const handleImg = (e) => {
    setFooImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("food : " + fooname + ', ' + "price:" + fooprice + ', '+" image: " + fooimage);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add menu Items</h1>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            id=""
            value={fooname}
            onChange={handleName}
          />
        </div>

        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            name="price"
            id=""
            value={fooprice}
            onChange={handlePrice}
          />
        </div>

        <div>
          <label htmlFor="">Image</label>
          <input type="file" value={fooimage} onChange={handleImg} />
        </div>

        <div>
          <input type="submit" value="Add menu" />
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
