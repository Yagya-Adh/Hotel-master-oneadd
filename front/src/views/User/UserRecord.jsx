import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import Pagination from "../../components/Pagination";

export default function UserRecord() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setNotification } = useStateContext();
    const [currentPage, setCurrentPage] = useState(1);

    // console.table(users.data);

    /* const { total, first_page_url, last_page, from, next_page_url, links, path, to, prev_page_url, per_page } = users;
              console.log(total, to, from, path);
           */

    useEffect(() => {
        getUsers();
    }, []);

    const onDeleteClick = (users) => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return;
        }
        axiosClient.delete(`/users/${users.id}`).then(() => {
            getUsers();
            setNotification("User was successfully deleted");
        });
    };

    const getUsers = () => {
        setLoading(true);
        axiosClient
            .get(`/users?page=${currentPage}`)
            .then(({ data }) => {
                setLoading(false);
                setUsers(data.user);
                setCurrentPage(data.user);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    const submitingForm = (e) => {
        e.preventDefault();
    };

    const Drop = () => {
        return (
            <div>
                <select>
                    <option value="">Page</option>
                    <option value="">5</option>
                    <option value="">10</option>
                </select>
            </div>
        );
    };

    const [search, setSearch] = useState("");

    const ChangeHand = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div>
            <h1 className="text-3xl my-2">Manage Users</h1>
            <div>
                <input
                    className="p-3 text-sm w-64 h-7 rounded-md my-2"
                    type="text"
                    onChange={ChangeHand}
                    placeholder="Search by name and email"
                />
            </div>
            {/* <Drop /> */}

            <form
                onSubmit={submitingForm}
                className="relative overflow-x-auto shadow-md sm:rounded-lg"
            >
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {loading && (
                        <tbody>
                            <tr aria-colspan="5" className="text-center">
                                Loading...
                            </tr>
                        </tbody>
                    )}

                    <tbody>
                        {users.data
                            ? users.data.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.created_at}</td>
                                    <td>
                                        <a
                                            className="bg-purple-600 p-2 text-white rounded-md"
                                            href={"/users/" + u.id}
                                        >
                                            Edit
                                        </a>
                                        &nbsp;
                                        <button
                                            className="bg-rose-600 p-2 text-white rounded-md"
                                            onClick={(ev) => onDeleteClick(u)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                            : null}
                    </tbody>
                </table>
            </form>

            <Pagination data={users} onPageChange={setCurrentPage} />
        </div>
    );
}
