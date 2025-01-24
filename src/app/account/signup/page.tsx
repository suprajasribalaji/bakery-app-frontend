'use client'

import Register from "@/app/components/Account/Register";

const Signup = () => {
    return (
        <Register pageName="Sign Up" subHeading="Already a member" registerOption="Sign up" redirectTo="Log In" routeTo="login"/>
    );
};

export default Signup;
