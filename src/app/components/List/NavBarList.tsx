'use client'

import { useRouter } from "next/navigation";
import React from "react";

interface NavBarListProps {
    href: string;
    className: string;
    name: string;
}

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