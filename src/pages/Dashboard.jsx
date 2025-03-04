import { Link } from "react-router";

function Dashboard() {
    return (
        <div className="flex gap-3 justify-center items-center ">
            <Link to="/jobs" className="py-4 px-10 text-4xl bg-indigo-600 hover:bg-indigo-800 text-white rounded-2xl" >Jobs</Link>
            <Link to="/rooms" className="py-4 px-10 text-4xl bg-indigo-600  hover:bg-indigo-800 text-white rounded-2xl">Rooms</Link>
        </div>
    )
}

export default Dashboard;