'use client'

import React, { useState } from "react";
import Button from "../Button/Button";
import { RegisterWithEmailAndPasswordProps } from "@/app/utils/types";
import ForgotPasswordModal from "../Modal/ForgotPasswordModal";
import { validateEmail, validatePassword } from "@/app/helpers/validators";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { requestUserSignupByEmail } from "@/app/redux/slices/user/signup";
import { requestUserLoginByEmail } from "@/app/redux/slices/user/login";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";

const RegisterWithEmailAndPassword: React.FC<RegisterWithEmailAndPasswordProps> = ({ pageName }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [isForgotPasswordModalOpened, setIsForgotPasswordModalOpened] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false); // 🔹 Loading state

    // Handle email change with validation
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value) ? null : "Invalid email format");
    };

    // Handle password change with validation
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(validatePassword(value) ? null : "Password must be at least 6 characters");
    };

    // Handle form submission
    const handleLoginOrSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Revalidate before proceeding
        if (!validateEmail(email)) {
            setEmailError("Invalid email format");
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError("Password must be at least 6 characters");
            return;
        }

        try {
            setLoading(true); // 🔹 Show loader
            let userCredential;
            if (pageName === 'Sign Up') {
                userCredential = await dispatch(requestUserSignupByEmail({ email, password }));
            } else {
                userCredential = await dispatch(requestUserLoginByEmail({ email, password }));
            }
            router.push('/');
        } catch (error: any) {
            message.error("Something went wrong. Please try again later");
        } finally {
            setLoading(false); // 🔹 Hide loader after request completes
        }
    };

    return (
        <div>
            <form onSubmit={handleLoginOrSignup} className="w-[90%] max-w-md mx-auto flex flex-col items-center">
                {pageName === "Sign Up" && (
                    <div className="relative z-0 w-[85%] mb-7 group">
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="username"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Username
                        </label>
                    </div>
                )}

                {/* Email Input Field */}
                <div className="relative z-0 w-[85%] mb-7 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                        placeholder=" "
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email
                    </label>
                    {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                </div>

                {/* Password Input Field */}
                <div className="relative z-0 w-[85%] mb-6 group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                        placeholder=" "
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    <label
                        htmlFor="password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password
                    </label>
                    {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                </div>

                {/* Forgot Password / Recaptcha */}
                {pageName === "Sign Up" ? (
                    <div className="mb-6 w-[85%] text-center">recaptcha</div>
                ) : (
                    <div className="mb-6 w-[85%] text-right">
                        <button
                            onClick={() => setIsForgotPasswordModalOpened(true)}
                            className="text-darkOliveGreen hover:text-oliveGreen hover:underline"
                            type="button"
                        >
                            Forgot Password?
                        </button>
                    </div>
                )}

                {/* Submit Button with Loader */}
                <div className="mb-6 w-[85%]">
                    <button
                        type="submit"
                        className={`flex items-center justify-center w-full border bg-oliveGreen text-white py-2 rounded ${
                            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-white hover:text-oliveGreen"
                        } px-4`}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                Processing...
                            </>
                        ) : (
                            <span className="text-center">{pageName}</span>
                        )}
                    </button>
                </div>
            </form>

            {/* Forgot Password Modal */}
            {isForgotPasswordModalOpened && (
                <ForgotPasswordModal
                    isModalOpen={isForgotPasswordModalOpened}
                    setIsModalOpen={setIsForgotPasswordModalOpened}
                />
            )}
        </div>
    );
};

export default RegisterWithEmailAndPassword;
