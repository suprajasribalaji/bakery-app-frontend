export interface RequestUserCredentialPayload {
    email: string;
    password: string;
};

export interface RequestUserLoginPayload {
    userCredential: any;
    thunkAPI: any;
};