export interface ButtonProps {
    iconUrl: string
    altText: string
    className: string
    style?: React.CSSProperties;
};

export interface NavBarListProps {
    href: string;
    className: string;
    aria_current?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    name: string;
};