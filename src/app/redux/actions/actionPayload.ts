export enum Actions {
    listenToAuthChanges = 'auth/listenToAuthChanges',
    requestUserSignupByEmail = 'signup/requestUserSignupByEmail',
    requestUserLoginByEmail = 'login/requestUserLoginByEmail',
    requestUserLoginByGoogle = 'login/requestUserLoginByGoogle',
    requestUserLoginByFacebook = 'login/requestUserLoginByFacebook',
    requestUserLogout = 'logout/requestUserLogout',
    requestResetPassword = 'api/requestResetPassword',
}