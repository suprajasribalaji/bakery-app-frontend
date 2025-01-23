'use client'

import React from "react";
import { ButtonProps } from "@/utils/types";
import { useRouter } from "next/navigation";

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