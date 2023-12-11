import React from "react";
import svg from "./pumkin.svg";

import Slider from "./Slider";
import ra from './ramen.jpg';
import kebab from './kebab.jpg';
import ba from './ba.jpg';
import ch from './chicken.jpg'
import demoVideo from './sizzling.mp4';


export default function About() {

    const slides = [
        ra,
        kebab,
        ba,
        ch
    ];


    return (
        /* id="header" */
        <div className="h-screen flex-col">
            {/* <h1 className='text-5xl font-sans font-bold text-sky-500'>Grow your business with</h1> */}

            <div className="p-3 flex flex-col justify-center my-4 h-screen bg-slate-700">

                <div className="md:w-[20%] lg:max-w-[60%]  flex flex-row justify-end p-3">
                    <div className="max-w-lg">
                        <Slider autoSlide={true} autoSlideInterval={4000}>
                            {[...slides.map((s) => (
                                <img src={s} />
                            )),

                            <vedio src={demoVideo} autoPlay muted loop />

                            ]}
                        </Slider>
                    </div>
                </div>

                <div className="flex flex-col justify-center align-center ">
                    <h1 className="text-5xl font-sans font-bold text-sky-500">
                        <strong className="brand-name text-blue-800 text-6xl">YAGYA</strong>
                    </h1>
                    <h2 className="my-3 text-xl text-gray-500">
                        we are the team of developer making websites
                    </h2>
                    <div className="my-6">
                        <a
                            href="/login"
                            className="p-3 text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-all rounded-full"
                        >
                            Get logged-in
                        </a>
                    </div>
                </div>

                <div className="flex justify-end">
                    <img
                        src={svg}
                        className="w-64 h-64 animate-none delay-1000 duration-500 transition-all"
                        alt="Common img"
                    />
                </div>
            </div>
        </div>
    );
}
