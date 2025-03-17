import React from "react";
import { RadioButtonProps } from "@/app/utils/types";

const RadioButton: React.FC<RadioButtonProps> = (props) => {
    const { label, name, value, id } = props;

    return (
        <div className="flex items-center">
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                className="border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <label
                htmlFor={id}
                className="block ms-1 text-xs font-medium text-gray-900"
            >
                {label}
            </label>
        </div>
    );
};

export default RadioButton;