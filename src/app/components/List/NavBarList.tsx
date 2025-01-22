import React from "react";

interface NavBarListProps {
    href: string;
    className: string;
    aria_current?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    name: string;
}

const NavBarList: React.FC<NavBarListProps> = (props) => {
    const { href, className, aria_current, name } = props;

    return (
        <li>
            <a href={href} className={className} aria-current={aria_current}>{name}</a>
        </li>
    );
};

export default NavBarList;