import React from "react";
import { InputFieldProps } from "@/app/utils/types";

const InputField: React.FC<InputFieldProps> = (props) => {
    const { label, type, id, name, placeholder, required, options } = props;

    return (
        <div className="relative z-0 w-full mb-3 group">
            {type !== "select" ? (
                <>
                    <input
                        type={type}
                        name={name}
                        id={id}
                        className="block py-2.5 px-0 w-5/6 text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder={placeholder}
                        required={required}
                    />
                    <label
                        htmlFor={id}
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        {label}
                    </label>
                </>
            ) : (
                <select
                    name={name}
                    id={id}
                    className="bg-gray-50 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5"
                >
                    {options?.map((option, index) => (
                        <option key={index} value={option}>
                        {option}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default InputField;