import React from "react";
import { NavBarListProps } from "@/utils/types";

const NavBarList: React.FC<NavBarListProps> = (props) => {
    const { href, className, aria_current, name } = props;

    return (
        <li>
            <a href={href} className={className} aria-current={aria_current}>{name}</a>
        </li>
    );
};

export default NavBarList;