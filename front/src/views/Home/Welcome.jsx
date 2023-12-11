import React from "react";
import svg from "./aaaastro.svg";
export default function Welcome() {
    return (
        <div id="header">
            {/* <h1 className='text-5xl font-sans font-bold text-sky-500'>Grow your business with</h1> */}

            <div className="p-3 flex flex-col justify-center my-4 h-screen bg-slate-700">
                <div className="flex flex-col justify-center align-center ">
                    <h1 className="text-5xl font-sans font-bold text-sky-500">
                        Grow your business with
                        <strong className="brand-name text-blue-800 text-6xl">YAGYA</strong>
                    </h1>
                    <h2 className="my-3 text-xl text-gray-500">
                        we are the team of developer making websites
                    </h2>
                    <div className="my-6">
                        <a
                            href="/about"
                            className="p-3 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-all rounded-full"
                        >
                            Get started
                        </a>
                    </div>
                </div>
                <div className="flex justify-end">
                    <img
                        src={svg}
                        className="opacity-40 animate-ping delay-800 transition-all"
                        alt="Common img"
                    />
                </div>
            </div>
        </div>
    );
}
