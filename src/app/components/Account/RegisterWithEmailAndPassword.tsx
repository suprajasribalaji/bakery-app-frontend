import React, { useState } from "react";
import Button from "../Button/Button";
import { RegisterWithEmailAndPasswordProps } from "@/utils/types";
import ForgotPasswordModal from "../Modal/ForgotPasswordModal";

const RegisterWithEmailAndPassword: React.FC<RegisterWithEmailAndPasswordProps> = (props) => {
    const { pageName } = props;
    const [isForgotPasswordModalOpened, setIsForgotPasswordModalOpened] = useState<boolean>(false);

    const handleForgotPasswordModal = () => {
        setIsForgotPasswordModalOpened(true);
    };

    return (
        <div>
            <form className="w-[90%] max-w-md mx-auto flex flex-col items-center">
                <div className="relative z-0 w-[85%] mb-7 group">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email
                    </label>
                </div>

                <div className="relative z-0 w-[85%] mb-6 group">
                    <input
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password
                    </label>
                </div>

                {pageName === "Sign Up" ? (
                    <div className="mb-6 w-[85%] text-center">recaptcha</div>
                ) : (
                    <div className="mb-6 w-[85%] text-right">
                        <button
                            onClick={handleForgotPasswordModal}
                            className="text-darkOliveGreen hover:text-oliveGreen hover:underline"
                            type="button"
                        >
                            Forgot Password?
                        </button>
                    </div>
                )}

                <div className="mb-6 w-[85%]">
                    <button className="flex items-center justify-center w-full border bg-oliveGreen text-white py-2 rounded hover:bg-white hover:text-oliveGreen px-4">
                        <span className="text-center">{pageName}</span>
                    </button>
                </div>

                <div className="mb-6">
                    <span className="text-center text-gray-500">or</span>
                </div>

                <div className="flex justify-center gap-8">
                    <Button
                        path="/"
                        iconUrl="/socialLink/google.png"
                        altText="Google Icon"
                        className="w-6 h-6"
                    />
                    <Button
                        path="/"
                        iconUrl="/socialLink/blue-facebook.png"
                        altText="Facebook Icon"
                        className="w-6 h-6"
                    />
                </div>
            </form>

            {isForgotPasswordModalOpened && (
                <ForgotPasswordModal isModalOpen={isForgotPasswordModalOpened} setIsModalOpen={setIsForgotPasswordModalOpened}  />
            )}
        </div>
    );
};

export default RegisterWithEmailAndPassword;
