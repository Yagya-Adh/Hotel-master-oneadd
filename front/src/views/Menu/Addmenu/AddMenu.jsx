import React, { useState } from "react";

const AddMenu = () => {
  // const [foodie, setFoodie] = useState({ name: "", price: "", image: "" });
  const [foodie, setFoodie] = useState([]);

  const onChanze = (e) => {
    setFoodie({ ...foodie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(
    //   "  food: " +
    //     foodie.name +
    //     " \n price: " +
    //     foodie.price +
    //     " \n image:" +
    //     foodie.image +
    //     " "
    // );
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
            value={foodie.name}
            onChange={onChanze}
          />
        </div>

        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            name="price"
            id=""
            value={foodie.price}
            onChange={onChanze}
          />
        </div>

        <div>
          <label htmlFor="">Image</label>
          <input
            type="file"
            name="image"
            value={foodie.image}
            onChange={onChanze}
          />
        </div>

        <div>
          <input type="submit" value="Add menu" />
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
