import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black">
            {children}
        </div>
    );
}
