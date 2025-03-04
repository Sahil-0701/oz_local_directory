import { Link, Outlet } from "react-router";
import Logo from "../components/Logo";

function DashboardLayout() {
    return (
        <div className="flex justify-center p-8">
            <div className="max-w-[300px] w-full flex flex-col justify-center gap-[24px]">
                <div className="flex justify-center">
                <Link to="/dashboard"><Logo height={44} width="200" /></Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;