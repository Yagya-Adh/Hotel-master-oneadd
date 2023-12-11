import React, { useState } from "react";
import UserRecord from "./UserRecord.jsx";

export default function User() {
    const [open, setOpen] = useState(false);

    const clickE = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className="flex justify-between">
                <a
                    href="/users/new"
                    className="bg-green-600 hover:text-white p-2 rounded-sm hover:bg-green-800"
                >
                    Add new user
                </a>
            </div>

            <div className="my-3">
                <UserRecord />
            </div>
        </div>
    );
}
