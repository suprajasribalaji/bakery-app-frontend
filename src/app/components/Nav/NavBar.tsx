'use client';

import { useState, useEffect, useRef } from "react";
import NavBarList from "../List/NavBarList";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { requestUserLogout } from "@/app/redux/slices/user/logout";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setCurrentUser } from "@/app/redux/slices/auth/auth";

const NavBar = () => {
    const [dropdownOpen, setDropDownOpen] = useState(false);
    const [authLoaded, setAuthLoaded] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const auth = getAuth();
    const countOfCartItems = 0;

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const isUserAuthenticated = useSelector((state: RootState) => state.auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setCurrentUser({ email: user.email, uid: user.uid, displayName: user.displayName }));
            } else {
                dispatch(setCurrentUser(null));
            }
            setAuthLoaded(true);
        });

        return () => unsubscribe();
    }, [dispatch]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropDownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownOpen]);

    const toggleDropDown = () => {
        setDropDownOpen((prevState) => !prevState);
    };

    const handleLogin = () => {
        router.push('/account/login');
    };

    const handleLogout = async () => {
        await dispatch(requestUserLogout());
        setDropDownOpen(false);
    };

    return (
        <nav className="w-full h-[14%] bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                <a href="/" className="flex items-center rtl:space-x-reverse">
                    <img src="/navBar/bakery-name.png" className="h-16 w-56 -ml-10 pt-2" alt="bakery Logo" />
                </a>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mt-3 relative">
                    {!authLoaded ? ( 
                        <div className="flex items-center">
                        <svg className="animate-spin h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                    </div>
                    ) : isUserAuthenticated ? (
                        <>
                            <button
                                id="dropdownNavbarLink"
                                onClick={toggleDropDown}
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                            >
                                <img
                                    src="/navBar/avatar.png"
                                    alt="Profile"
                                    className="h-6 w-6 rounded-full"
                                />
                                <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            {dropdownOpen && (
                                <div ref={dropdownRef} className="absolute top-full -left-32 mt-3 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <ul className="text-sm text-gray-700">
                                        <NavBarList href="/" className="navbar-profile-list" name="Account Settings" />
                                        <NavBarList href="/" className="navbar-profile-list" name="My Orders" />
                                    </ul>
                                    <div>
                                        <button
                                            onClick={handleLogout}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-oliveGreen"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <button
                            id="login"
                            onClick={handleLogin}
                            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                        >
                            <img src="/navBar/avatar.png" alt="Profile" className="h-6 w-6 rounded-full" />
                            <p className="pl-2">Login</p>
                        </button>
                    )}
                     </div>
                <div className="items-center pl-[50%] pt-4 hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <NavBarList
                            href="/"
                            className="block py-2 px-3 rounded md:bg-transparent md:hover:text-oliveGreen md:text-black md:p-0 text-[96%] font-[Arial]"
                            name="Menu"
                        />
                        <NavBarList
                            href="/"
                            className="navbar-list"
                            name="Order"
                        />
                        <NavBarList
                            href="/feedback"
                            className="navbar-list"
                            name="Feedback"
                        />
                        <a href="/" className="flex items-center rtl:space-x-reverse gap-2">
                            <img src="/navBar/shopping-cart.png" className="h-8 -mt-2" alt="bakery Logo" />
                            <span className="text-black">{countOfCartItems}</span>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
