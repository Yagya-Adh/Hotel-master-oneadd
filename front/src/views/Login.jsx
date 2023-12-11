import QRCode from "react-qr-code";
import React, { useState } from "react";
import axiosClient from "../axiosClient";
import { createRef } from "react";
import { useStateContext } from "../context/ContextProvider";
import { Link } from "react-router-dom";

export default function Login() {
    const emailRef = createRef();
    const passwordRef = createRef();
    const { setUser, setToken } = useStateContext();
    const [message, setMessage] = useState(null);

    // console.log("hello0");

    const SubmitHand = (e) => {
        e.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        console.log(payload);
        // debugger;
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                // console.log(JSON.stringify(data.user));
                // console.log("hello2");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setMessage(response.data.message);

                    // console.warn(response.data.message);
                }
            });
    };

    return (
        <div className="flex flex-col justify-center items-center h-full ">
            <div className="p-4 rounded-xl border-2 border-slate-500 flex">
                <form onSubmit={SubmitHand} className="p-4">
                    {message && (
                        <div className="alert">
                            <p>{message}</p>
                        </div>
                    )}
                    <h1 className="text-2xl text-center font-bold">Login</h1>
                    <div className="my-2">
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="your@mail"
                            className="p-2 text-xl  text-neutral-600 rounded-md"
                        />
                    </div>
                    <div className="my-2">
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="password"
                            className="p-2 text-xl text-neutral-600 rounded-md"
                        />
                    </div>
                    <div className="justify-center flex-col flex rounded-md bg-slate-800 hover:bg-slate-900 ">
                        <button className="text-xl p-1 border-0 text-gray-100 hover:text-gray-300  transition-all hover:ease-in">
                            Login
                        </button>
                    </div>
                    <div className="my-1 flex flex-col">
                        <p>
                            Not Registered?
                            <a
                                className="text-sky-500  hover:text-slate-900"
                                href="/register"
                            >
                                registration
                            </a>
                        </p>
                        <p>
                            Reset password?
                            <a
                                className="text-sky-500  hover:text-slate-900"
                                href="#"
                            >
                                forget password
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            <div className="p-3 absolute center-0 right-0">
                MENU QR-{" "}
                <QRCode
                    value={"www.facebook.com"}
                    size={55}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
            </div>
        </div>
    );
}
