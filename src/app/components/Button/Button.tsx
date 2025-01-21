import React from "react";

interface ButtonProps {
    iconUrl: string
    altText: string
    className: string
    style?: React.CSSProperties;
};

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