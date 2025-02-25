import { Outlet } from "react-router";
import Logo from "../components/Logo";

function AuthLayout() {
    return (
        <div className="flex justify-center p-8">
            <div className="max-w-[300px] w-full flex flex-col h-screen justify-center gap-[24px]">
                <div className="flex justify-center">
                    <Logo height={44} width="200" />
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;