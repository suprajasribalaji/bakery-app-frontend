export interface ButtonProps {
    path: string;
    iconUrl: string;
    altText: string;
    className: string;
    style?: React.CSSProperties;
};

export interface RadioButtonProps {
    label: string;
    name: string;
    value: string;
    id: string;
};

export interface InputFieldProps {
    label: string;
    type: string;
    id: string;
    name: string;
    placeholder: string;
    required?: boolean;
    options?: string[];
};

export interface NavBarListProps {
    href: string;
    className: string;
    aria_current?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
    name: string;
};

export interface RegisterProps {
    pageName: string;
    subHeading: string;
    redirectTo: string;
    routeTo: string;
    registerOption: string;
};