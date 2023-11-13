import { Link, Outlet, useLocation } from "react-router-dom";
import Title from "../components/Title";
import { useState } from "react";

const DashboardLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };


    const isActiveRoute = (route) => {
        return location.pathname === route;
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Title>Dashboard</Title>
            <div className="bg-gray-800 text-white p-4">
                <div className="flex justify-between items-center">
                    <Link to={'/'} className="text-2xl font-serif italic font-bold">FHI Tools</Link>
                    {/* Burger menu for mobile */}
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden focus:outline-none text-white"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col items-start lg:flex-row">
                <div
                    className={`bg-gray-800 text-white w-full lg:w-1/5 lg:min-h-screen p-4 lg:p-8 ${isSidebarOpen ? 'block' : 'hidden'
                        } lg:block`}
                >
                    <ul>
                        <ul>
                            <li className={`mb-4 border p-2 rounded-lg ${isActiveRoute('/dashboard') ? 'text-accent font-bold' : 'hover:bg-gray-600'}`}>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className={`mb-4 border p-2 rounded-lg ${isActiveRoute('/dashboard/bookings') ? 'text-accent font-bold' : 'hover:bg-gray-600'}`}>
                                <Link to="/dashboard/report">Add Report</Link>
                            </li>
                            <li className={`mb-4 border p-2 rounded-lg ${isActiveRoute('/dashboard/addphone') ? 'text-accent font-bold' : 'hover:bg-gray-600'}`}>
                                <Link to="/dashboard/profile">profile</Link>
                            </li>
                        </ul>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4 lg:p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;