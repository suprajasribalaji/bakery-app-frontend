import React from "react";
import { ButtonProps } from "@/utils/types";

const Button: React.FC<ButtonProps> = (props) => {
    const {iconUrl, altText, className, style} = props;
    
    return (
        <button
            aria-label={altText}
            className={`flex items-center justify-center rounded-full ${className}`}
            style={{ backgroundImage: `url(${iconUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', border: 'none', ...style }}
        />
    );
};

export default Button;