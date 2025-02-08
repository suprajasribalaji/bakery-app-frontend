import { emailRegex, passwordRegex } from "@/app/utils/regex";

export const validateEmail = (email: string) => {
    if (!emailRegex.test(email)) {
        return "Invalid email format";
    } else {
        return null;
    }
};

export const validatePassword = (password: string) => {
    if (!passwordRegex.test(password)) {
        return "Password must contain at least 8 characters, 1 uppercase, 1 number, and 1 lowercase.";
    } else {
        return null;
    }
};