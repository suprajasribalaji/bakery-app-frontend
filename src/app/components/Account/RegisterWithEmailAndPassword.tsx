'use client'

import React, { useState } from "react";
import Button from "../Button/Button";
import { RegisterWithEmailAndPasswordProps } from "@/app/utils/types";
import ForgotPasswordModal from "../Modal/ForgotPasswordModal";
import { validateEmail, validatePassword } from "@/app/helpers/validators";
import axios from "axios";
import { message } from "antd";
import { useRouter } from "next/navigation";

const RegisterWithEmailAndPassword: React.FC<RegisterWithEmailAndPasswordProps> = (props) => {
    const { pageName } = props;
    const router = useRouter();
    const [isForgotPasswordModalOpened, setIsForgotPasswordModalOpened] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);   

    const [messageApi, contextHolder] = message.useMessage();

    const success = (message: string) => {
      messageApi.open({
        type: 'success',
        content: message,
      });
    };
  
    const handleForgotPasswordModal = () => {
        setIsForgotPasswordModalOpened(true);
    };

    const handleLoginOrSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailError(validateEmail(email));
        setPasswordError(validatePassword(password));

        if (!emailError && !passwordError) {
            if (pageName === "Sign Up") {
                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/accounts/signup/', {
                        username: username,
                        email: email,
                        password: password,
                    });
                    if(response.status===201){
                        setUsername('');
                        setEmail('');
                        setPassword('');
                        setEmailError('');
                        setPasswordError('');
                        router.push('/');
                        console.log('User created successfully');
                        success('User Created Successfully');
                    }
                } catch (error: any) {
                    console.log(error, ' ---____---');
                    message.error('Something went wrong. Please try again later');
                }
            }

            if (pageName === "Log In") {
                try {
                    const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/', {
                        email: email,
                        password: password,
                    });
                    if(response.status===200){
                        setEmail('');
                        setPassword('');
                        setEmailError('');
                        setPasswordError('');
                        router.push('/');
                        console.log('User Logged in successfully');
                        success('User Logged in successfully');
                    }
                } catch (error: any) {
                    console.log(error, ' ---____---');
                    message.error('Something went wrong. Please try again later');
                }
            }
        }
    };

    return (
        <div>
            {contextHolder}
            <form className="w-[90%] max-w-md mx-auto flex flex-col items-center" onSubmit={handleLoginOrSignup}>
                {
                    pageName==="Sign Up" && 
                    <div className="relative z-0 w-[85%] mb-7 group">
                        <input
                            type="username"
                            name="floating_username"
                            id="floating_username"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none peer"
                            placeholder=" "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="floating_username"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Username
                        </label>
                    </div>
                }
                <div className="relative z-0 w-[85%] mb-7 group">
                    <input
                        type="email"
                        name="floating_email"
                        id="floating_email"
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                            emailError ? "border-red-500" : "border-gray-300"
                        } appearance-none focus:outline-none peer`}
                        placeholder=" "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => validateEmail(email)}
                        required
                    />
                    <label
                        htmlFor="floating_email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email
                    </label>
                    {emailError && <span className="text-red-500 text-xs mt-1">{emailError}</span>}
                </div>

                <div className="relative z-0 w-[85%] mb-6 group">
                    <input
                        type="password"
                        name="floating_password"
                        id="floating_password"
                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                            passwordError ? "border-red-500" : "border-gray-300"
                        } appearance-none focus:outline-none peer`}
                        placeholder=" "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => validatePassword(password)}
                        required
                    />
                    <label
                        htmlFor="floating_password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Password
                    </label>
                    {passwordError && <span className="text-red-500 text-xs mt-1">{passwordError}</span>}
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
            </form>

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
