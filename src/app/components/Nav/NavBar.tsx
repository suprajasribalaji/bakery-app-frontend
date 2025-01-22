'use client'

import { useState } from "react";
import NavBarList from "../List/NavBarList";

const NavBar = () => {
    const [dropdownOpen, setDropDownOpen] = useState<boolean>(false);
    const countOfCartItems = 0;

    const toggleDropDown = () => {
        setDropDownOpen((prevState) => !prevState);
    };

    return (
        <nav className="w-full h-[14%] bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                <a href="/" className="flex items-center rtl:space-x-reverse">
                    <img src="/bakery-name.png" className="h-16 w-48 -ml-12" alt="bakery Logo" />
                </a>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mt-3 relative">
                    <button
                        id="dropdownNavbarLink"
                        onClick={toggleDropDown}
                        onBlur={() => setDropDownOpen(false)}
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-oliveGreen md:p-0 md:w-auto dark:text-white md:dark:hover:text-oliveGreen dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                        <img
                            src="/avatar.png"
                            alt="Profile"
                            className="h-6 w-6 rounded-full"
                        />
                        <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    {dropdownOpen && (
                        <div
                            id="dropdownNavbar"
                            className="absolute top-full -left-32 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                        >
                            <ul className="text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <NavBarList href="/" className="navbar-profile-list" aria_current={undefined} name="Account Settings" />
                                <NavBarList href="/" className="navbar-profile-list" aria_current={undefined} name="My Orders" />
                                <NavBarList href="/" className="" aria_current={undefined} name="" />
                            </ul>
                            <div>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:text-oliveGreen dark:text-gray-200 dark:hover:text-white">Log out</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className="items-center pl-[58%] pt-4 hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavBarList
                            href="/"
                            className="block py-2 px-3 text-white bg-darOliveGreen rounded md:bg-transparent md:text-darkOliveGreen md:p-0 md:dark:text-darkOliveGreen"
                            aria-current="page"
                            name="Menu"
                        />
                        <NavBarList
                            href="/"
                            className="navbar-list"
                            aria_current={undefined}
                            name="Order"
                        />
                        <NavBarList
                            href="/"
                            className="navbar-list"
                            aria_current={undefined}
                            name="Feedback"
                        />
                        <a href="/" className="flex items-center rtl:space-x-reverse gap-2">
                            <img src="/shopping-cart.png" className="h-8 -mt-2" alt="bakery Logo" />
                            <span>{countOfCartItems}</span>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
