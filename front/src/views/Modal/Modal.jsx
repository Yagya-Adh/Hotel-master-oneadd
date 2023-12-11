import React, { useEffect } from "react";

export default function Modal({ close }) {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            // cleanup;
            document.body.style.overflowY = "scroll";
        };
    }, []);

    return (
        <div className="border p-4">
            <div className="modal-wrapper shadow-lg" onClick={close}></div>
            <div className="modal-container">
                <div>
                    <h1 className="text-xl"> Name: {"Yagya"}</h1>
                    <h2 className="text-xl"> Age : {27}</h2>
                    <h2 className="text-xl"> Address : {"Bharatpur"}</h2>
                    <h2 className="text-xl"> Email : {"yagya@mail.com"}</h2>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
                        tempora ullam eius ut quo quis deleniti placeat iusto porro quia
                        ipsam unde amet corrupti! Architecto dolorum nobis sapiente optio
                        reiciendis!
                    </p>
                </div>

                <button
                    className="hover:text-white transition-all hover:bg-blue-600 border bg-blue-500 p-3 rounded-md"
                    onClick={close}
                >
                    Cancels
                </button>
            </div>
        </div>
    );
}
