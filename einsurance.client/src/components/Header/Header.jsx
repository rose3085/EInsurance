import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Image/Logo.png'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-2 py-1">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center  mt-1 ">
                        <img
                            src={Logo}
                            className="h-20 w-28"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <div
                            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col-reverse mt-4 mr-2 font-medium font-sans text-lg lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink to="/"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0065ff]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0065ff]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0`
                                        }
                                    >
                                        About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact"
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0065ff]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0065ff] lg:p-0`
                                        }
                                    >
                                        Insurance Policy
                                    </NavLink>
                                </li>



                            </ul>
                            <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white text-base bg-[#008a8a] hover:bg-[#0EAA42] focus:ring-4 focus:ring-[#a1a2e6] font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign in
                        </Link>
                        </div>
                        
                    </div>

                </div>
            </nav>
        </header>
    );
}

