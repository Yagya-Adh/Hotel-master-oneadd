import { useState } from "react";
import SearchBar from "./SearchBar";
export default function UserList() {
    const day = new Date();
    const data = [
        { id: 1, name: "Binod", mail: "binod.@mail.com", visited_time: day },
        { id: 2, name: "Manoj", mail: "Manoj@mail.com", visited_time: day },
        { id: 3, name: "Kishan", mail: "KissON@mail.com", visited_time: day },
        { id: 4, name: "Rabi", mail: "roooB@mail.com", visited_time: day },
        { id: 5, name: "Tilak", mail: "tLk@mail.com", visited_time: day },
        { id: 6, name: "Pawan", mail: "bpawan@mail.com", visited_time: day },
        { id: 7, name: "Vimal", mail: "vimal99nepal.@mail.com", visited_time: day },
    ];

    // console.log(data);

    const [search, setSearch] = useState("");
    const ChangSeach = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    // console.log(search);

    return (
        <div className="p-2">
            <SearchBar changesearch={ChangSeach} />

            <h1 className="text-2xl">User List</h1>
            <span className=" text-neutral-400"> Visiters list </span>

            <div className="my-3 flex text-slate-400 bg-slate-800 p-4">
                {data
                    .filter((item) => {
                        return search.toLowerCase() === ""
                            ? item
                            : item.name.toLowerCase().includes(search);
                    })
                    .map((fake) => {
                        return (
                            <div key={fake.id}>
                                <h1 className="m-2 text-xl">
                                    {fake.id}. {fake.name}{" "}
                                </h1>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
