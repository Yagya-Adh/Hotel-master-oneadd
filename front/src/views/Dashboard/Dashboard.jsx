import BarChart from "./BarChart";
import UserList from "./UserList";

export default function Dashboard() {
    return (
        <div className="flex-col">
            <h1>Dashboard</h1>

            <div></div>

            <UserList />
            <BarChart />
        </div>
    );
}
