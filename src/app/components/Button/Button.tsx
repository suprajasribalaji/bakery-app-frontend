import React from "react";
import { ButtonProps } from "@/app/utils/types";

const Button: React.FC<ButtonProps> = (props) => {
    const { path, iconUrl, altText, className, style } = props;

    return (
        <a href={path} target="_blank" rel="noopener noreferrer">
            <button
                aria-label={altText}
                className={`flex items-center justify-center rounded-full ${className}`}
                style={{ backgroundImage: `url(${iconUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', border: 'none', ...style }}
            />
        </a> 
    );
};

export default Button;