import React, { useState } from "react";

const AddMenu = () => {
  const [foodie, setFoodie] = useState({
    name: "",
    price: "",
    image: "",
    catagory: "",
  });

  const [foodStore, setFoodStore] = useState([]);

  const onChanze = (e) => {
    setFoodie({ ...foodie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFoodStore([...foodStore, foodie]);
    setFoodie({ name: "", price: "", image: "", catagory: "" });
  };
  console.log(foodStore);

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
          <label htmlFor="">Category</label>
          <select
            name="catagory"
            id=""
            onChange={onChanze}
            value={foodie.catagory}
          >
            <option className="p-3 w-full" value={" "}></option>

            <option className="p-3 w-full" value={"drink"}>
              drink
            </option>
            <option className="p-3 w-full" value={"meal"}>
              meal
            </option>
            <option className="p-3 w-full" value={"break-fast"}>
              break-fast
            </option>
            <option className="p-3 w-full" value={"snack"}>
              snack
            </option>
            <option className="p-3 w-full" value={"desert"}>
              desert
            </option>
          </select>
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
