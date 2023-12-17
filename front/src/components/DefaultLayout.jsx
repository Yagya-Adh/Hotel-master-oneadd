import { Navigate, Outlet, Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axiosClient";
import { useEffect } from "react";

import { MdOutlineFastfood } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";




export default function DefaultLayout() {
  const { user, token, setUser, setToken, notification } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const onLogout = (e) => {
    e.preventDefault();

    axiosClient.post("/logout").then(() => {
      setToken(null);
      setUser({});
    });
  };

  useEffect(() => {
    axiosClient.get("/users").then(({ data }) => {
      setUser(data);
    });
  }, []);
  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard" className="text-xl scale-95 hover:scale-100">
          DASHBOARD <MdDashboardCustomize />
        </Link>
        <Link to="/users">
          USERS <FaUsers />
        </Link>
        <Link to="/food">
          FOOD <MdOutlineFastfood />
        </Link>
        <Link to="/menu">
          MENU <MdRestaurantMenu />
        </Link>

        {/* <Link to="/upload">
          UPLOAD <FaUpload />
        </Link> */}

        <Link to="/order">
          Orders <MdFastfood />
        </Link>
        <Link to="/account">
          ACCOUNT
          <MdAccountBalance />
        </Link>
        <Link to="/history">
          History
          <MdHistory />
        </Link>

        <Link to="/quiz">
          Quiz board
          <FaGamepad />

        </Link>
      </aside>

      <div className="content">
        <header>
          <div>Header</div>
          <div>
            {user.name}&nbsp; &nbsp;
            <span className="btn-logout" href="#" onClick={onLogout}>
              <FaPowerOff />
              {/* Logout */}
            </span>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </div>
  );
}
