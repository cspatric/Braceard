import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import logo from "../Pages/Auth/1.png";

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black ">
            <div className="border-2 py-12 bg-white md:max-w-screen md:max-w-96 p-6 w-full h-screen rounded-3xl">
                <nav className="w-full h-12 flex justify-between items-center">
                <img
                        className="h-32"
                        src={logo}
                        alt=""
                    />
                    <div>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </Dropdown.Link>
                    </div>
                </nav>
                <main>{children}</main>
            </div>
        </div>
    );
}
