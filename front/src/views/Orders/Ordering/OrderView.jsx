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
    // {
    //     id: 2,
    //     momo: [
    //         { id: 1, name: "Open momo", price: "18" },
    //         { id: 2, name: "Normal momo", price: "12" },
    //         { id: 3, name: "Fry momo", price: "15" },
    //         { id: 4, name: "Steam momo", price: "13" },
    //     ],
    // },
];
import React, { useState } from 'react'
export default function Order() {
    const [searcher, setSearcher] = useState("");

    const HandleSearch = (e) => {
        e.preventDefault();
        setSearcher(e.target.value);
    };

    return (
        <div>
            <form action="">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">S.No</th>
                            <th className="text-center">Items</th>
                            <th className="text-center">price</th>
                            <th className="text-center">Qty</th>
                            <th className="text-center">
                                {" "}
                                order <small>checked to order</small>{" "}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menuList.map((men) => {
                                const { rice } = men;
                                return rice
                                    .filter((item) => {
                                        return searcher.toLowerCase() === ""
                                            ? item
                                            : item.name.toLowerCase().includes(searcher);
                                    })
                                    .map((ri, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{ri.id}</th>
                                                <th>{ri.name}</th>
                                                <th>$ {ri.price}</th>
                                                <th>{ri.qty}</th>
                                                <th>
                                                    {/* <input type="range" min="1" max="5" className="in-range:border-green-500 " /> */}
                                                    <input
                                                        type="checkbox"
                                                        className=" checked:bg-blue-500 "
                                                    />
                                                </th>
                                            </tr>
                                        );
                                    });
                            })
                        }

                        {!menuList && <p>No Menu items is ordered</p>}
                    </tbody>
                </table>

                <div className="justify-end flex ">
                    <button className=" bg-neutral-400 border p-2 rounded-md hover:bg-neutral-300">
                        Order
                    </button>

                    <button className=" bg-neutral-400 border p-2 rounded-md hover:bg-neutral-300">
                        Order
                    </button>
                </div>
            </form>
        </div>
    );
}
