import { emailRegex, passwordRegex } from "@/app/utils/regex";

export const validateEmail = (email: string) => {
    if (!emailRegex.test(email)) {
        return false;
    } else {
        return true;
    }
};

export const validatePassword = (password: string) => {
    if (!passwordRegex.test(password)) {
        return false;
    } else {
        return true;
    }
};