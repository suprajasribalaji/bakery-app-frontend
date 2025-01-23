'use client'

import React from "react";
import { NavBarListProps } from "@/utils/types";
import { useRouter } from "next/navigation";

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