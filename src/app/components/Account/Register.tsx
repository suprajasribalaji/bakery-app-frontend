'use client'

import React, { useState } from "react";
import { RegisterProps } from "@/utils/types";
import { useRouter } from "next/navigation";
import RegisterWithEmailAndPassword from "./RegisterWithEmailAndPassword";

const Register: React.FC<RegisterProps> = (props) => {
    const { pageName, subHeading, redirectTo, routeTo, registerOption } = props;
    const router = useRouter();
    const [isLoginWithEmailOpened, setIsLoginWithEmailOpened ] = useState<boolean>(false);

    const handleRouter = () => {
        const route = '/account/' + routeTo;
        router.push(route);
    };

    const handleEmailOption = () => {
        setIsLoginWithEmailOpened(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center -mt-12 bg-white">
            <div className="p-6 w-96">
                <div className="text-center mb-6">
                    <span className="text-[280%] font-bold font-playfairDisplay">{pageName}</span>
                </div>
                <div className="flex justify-center items-center mb-6 font-heebo text-[102%] -mt-2">
                    <p className="mr-2">{subHeading}?</p>
                    <button
                        onClick={handleRouter}
                        className="text-oliveGreen hover:text-darkOliveGreen"
                    >
                        {redirectTo}
                    </button>
                </div>
                {
                    isLoginWithEmailOpened ? <RegisterWithEmailAndPassword type={registerOption} pageName={pageName} /> : 
                    (
                        <div className="grid gap-4 mt-10">
                            <button className="flex items-center border text-black py-2 rounded hover:bg-gray-100 px-4 ml-4 mr-4">
                                <img
                                    src="/socialLink/google.png"
                                    alt="Google Icon"
                                    className="h-6 w-6 mr-3"
                                />
                                <span className="flex-1 text-center">{registerOption} with Google</span>
                            </button>
                            <button className="flex items-center border bg-blue-900 text-white py-2 rounded hover:bg-blue-700 px-4 ml-4 mr-4">
                                <img
                                    src="/socialLink/blue-facebook.png"
                                    alt="Facebook Icon"
                                    className="h-6 w-6 mr-3"
                                />
                                <span className="flex-1 text-center">{registerOption} with Facebook</span>
                            </button>
                            <span className="text-center text-gray-500">or</span>
                            <button onClick={handleEmailOption} className="flex items-center border text-black py-2 rounded hover:bg-gray-100 px-4 ml-4 mr-4">
                                <img
                                    src="/socialLink/email.png"
                                    alt="Email Icon"
                                    className="h-6 w-6 mr-3"
                                />
                                <span className="flex-1 text-center">{registerOption} with Email</span>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Register;
