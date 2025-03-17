'use client'

import Register from "@/app/components/Account/Register";

const Login = () => {
    return (
        <Register pageName="Log In" subHeading="New to this site" registerOption="Log in" redirectTo="Sign Up" routeTo="signup"/>
    );
};

export default Login;
