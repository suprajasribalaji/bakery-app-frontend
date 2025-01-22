'use client'

import { useRouter } from "next/navigation";
import React from "react";

interface NavBarListProps {
    href: string;
    className: string;
    aria_current?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    name: string;
}

const NavBarList: React.FC<NavBarListProps> = (props) => {
    const { href, className, aria_current, name } = props;
    const router = useRouter();

    const handleNavigation = () => {
        router.push(href)
    }

    return (
        <li>
            <button onClick={handleNavigation} className={className} aria-current={aria_current}>{name}</button>
        </li>
    );
};

export default NavBarList;