import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import Pagination from "../../components/Pagination";

import { FaCartShopping } from "react-icons/fa6";
import CartItems from "./CartItems";
import { FcStackOfPhotos } from 'react-icons/fc'
export default function Food() {

    const [loading, setLoading] = useState(false);
    const [foods, setFoods] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [cart, setCart] = useState({});
    const [cartList, setCartList] = useState([]);

    const addTocart = (id) => {
        const cartdata = foods.data[id];
        if (cartdata) {
            setCart({
                name: cartdata.name,
                price: cartdata.price,
            });
            setCartList([...cartList, cart]);
            // console.log("add is clicked", id);
        }
        console.log(cartList);

        ///////////////
        // axios post//
        //////////////

        axiosClient
            .post('/cart', cartList).then(() => {

            })
            .catch(() => { });
    }


    useEffect(() => {
        getFood();
    }, [currentPage]);

    const getFood = () => {
        setLoading(true);
        axiosClient
            .get(`/food?page=${currentPage}`)
            .then((res) => {
                // console.log(res.data);
                setLoading(false);
                setFoods(res.data.food);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return (
        <div className="flex-col justify-center">
            <div className="my-2 justify-end flex">
                <a href="/cart" className="border-slate-700 px-4 flex-rrow flex  py-2 text-xl hover:text-white hover:bg-blue-600 border  hover:border-0 rounded-xl">
                    <FaCartShopping /> <p>Carts</p>
                </a>

            </div>
            <div className="my-2">
                <div className="justify-center flex-row md:basis-1/4 lg:basis-1/2 flex flex-wrap">
                    {foods.data
                        ? foods.data.map((row) => (
                            <div
                                className="rounded-2xl shadow-xl  border-4 p-3 m-3 w-64 "
                                key={row.id}
                            >
                                {row.image ? (
                                    <img
                                        src={row.image.image}
                                        className="scale-50 hover:scale-90 rounded-mdmy-3 shadow-2xl"
                                        style={{ width: "200px", height: "200px" }}
                                    />
                                ) : (
                                    /* if no image found  */
                                    <FcStackOfPhotos style={{ width: "200px", height: "200px" }} />
                                )}
                                <div>
                                    <h1 className="text-xl">
                                        {row.id}
                                        {row.name}
                                    </h1>
                                    <b> {row.slug} </b>
                                    <h1 className="text-xl ">${row.price}</h1>
                                    <p className=" border p-2text-center">
                                        {" "}
                                        {row.description}{" "}
                                    </p>
                                </div>
                                <button onClick={() => addTocart(row.id)} className="p-2 border rounded-lg bg-orange-400 hover:text-white transition-all my-3">Add</button>
                            </div>
                        ))
                        : null}
                </div>
            </div>

            <div>
                <Pagination className="" data={foods} onPageChange={setCurrentPage} />
            </div>
        </div>
    );
}
