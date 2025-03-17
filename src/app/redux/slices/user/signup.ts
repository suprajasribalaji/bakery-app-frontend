import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Actions } from "../../actions/actionPayload";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/config/firebase.config";
import { RequestUserCredentialPayload, RequestUserLoginPayload } from "./userPayload";
import { setCurrentUser } from "../auth/auth";
import { AuthStatePayload } from "../auth/authPayload";

const initialState: AuthStatePayload = {
    currentUser: null,
    status: 'idle',
    isLoading: true,
};

const handleUserSignup = async ({userCredential, thunkAPI}: RequestUserLoginPayload) => {
    try {
        const user = userCredential.user;
        if (!user) return thunkAPI.rejectWithValue("User not found");
        const serializedUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        };        
        thunkAPI.dispatch(setCurrentUser(serializedUser));
        return serializedUser;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message || "Signup handling failed")
    }
};

export const requestUserSignupByEmail = createAsyncThunk(
    Actions.requestUserSignupByEmail,
    async({email, password}: RequestUserCredentialPayload, thunkAPI) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return await handleUserSignup({userCredential, thunkAPI});
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Signup failed! Check Email and Password!');
        }
    }  
);

const SignupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestUserSignupByEmail.pending, (state: any) => {
                state.status = 'pending',
                state.isLoading = true;
            })
            .addCase(requestUserSignupByEmail.fulfilled, (state: any, action) => {
                state.currentUser = action.payload;
                state.status = 'fulfilled';
                state.isLoading = false;
            })
            .addCase(requestUserSignupByEmail.rejected, (state: any) => {
                state.currentUser = null;
                state.status = 'rejected';
                state.isLoading = false;
            })
    },
});

export default SignupSlice.reducer;