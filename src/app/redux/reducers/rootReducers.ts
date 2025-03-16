import AuthReducer from "../slices/auth/auth";
import SignupReducer from "../slices/user/signup";
import LoginReducer from "../slices/user/login";
import LogoutReducer from "../slices/user/logout";

export const rootReducers = {
    auth: AuthReducer,
    login: LoginReducer,
    signup: SignupReducer,
    logout: LogoutReducer,
}