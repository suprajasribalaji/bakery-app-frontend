'use client'
import { redirect, useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
    path: string;
    iconUrl: string;
    altText: string;
    className: string;
    style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = (props) => {
    const {path, iconUrl, altText, className, style} = props;
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(path)}
            aria-label={altText}
            className={`flex items-center justify-center rounded-full ${className}`}
            style={{ backgroundImage: `url(${iconUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', border: 'none', ...style }}
        />
    );
};

export default Button;