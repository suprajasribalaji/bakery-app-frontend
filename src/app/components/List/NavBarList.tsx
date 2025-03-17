'use client'

import React from "react";
import { NavBarListProps } from "@/app/utils/types";
import { useRouter } from "next/navigation";

const NavBarList: React.FC<NavBarListProps> = (props) => {
    const { href, className,  name } = props;
    const router = useRouter();

    const handleNavigation = () => {
        router.push(href)
    }

    return (
        <li>
            <button onClick={handleNavigation} className={className}>{name}</button>
        </li>
    );
};

export default NavBarList;