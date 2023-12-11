import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import NavBar from "./GuestNavBar/NavBar";

export default function GuestLayout() {
    const { token } = useStateContext();

    // debugger;

    if (token) {
        return <Navigate to="/" />;
    }

    return (
        /* bg-slate-700 h-screen text-slate-100 */

        /* flex-col flex h-screen    */
        <div className="h-screen gradient-bg-welcome">
            {/* bg-green-500  */}
            <div className="mx-auto p-3 justify-center flex">
                <NavBar />
            </div>
            <Outlet />
        </div>
    );
}
