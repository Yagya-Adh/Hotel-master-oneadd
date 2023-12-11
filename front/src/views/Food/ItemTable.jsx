import React, { useState } from "react";

const ItemTable = ({ items, handleAddToCart }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="border p-1 shadow-xl">
            <h2 className="text-xl bg-gray-300 p-2 my-2">Menu Table</h2>
            <input
                type="text"
                placeholder="Search items"
                value={searchTerm}
                onChange={handleSearch}
                className="p-2"
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>
                                <button
                                    className="bg-green-500 p-1 rounded-md text-white hover:bg-green-700 transition-all"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ItemTable;
