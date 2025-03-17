import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Actions } from "../../actions/actionPayload";
import { RequestUserCredentialPayload, RequestUserLoginPayload } from "./userPayload";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, facebookAuthProvider, googleAuthProvider } from "@/app/config/firebase.config";
import { setCurrentUser } from "../auth/auth";
import { AuthStatePayload } from "../auth/authPayload";

const initialState: AuthStatePayload = {
    currentUser: null,
    status: 'idle',
    isLoading: true,
};

const handleUserLogin = async ({ userCredential, thunkAPI}: RequestUserLoginPayload) => {
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
        return thunkAPI.rejectWithValue(error.message || "Login handling failed");
    }
};

export const requestUserLoginByEmail = createAsyncThunk(
    Actions.requestUserLoginByEmail,
    async({email, password}: RequestUserCredentialPayload, thunkAPI) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return await handleUserLogin({ userCredential, thunkAPI});
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Login failed! Check Email and Password!');
        }
    }  
);

export const requestUserLoginByGoogle = createAsyncThunk(
    Actions.requestUserLoginByGoogle,
    async (_, thunkAPI) => {
        try {
            const userCredential = await signInWithPopup(auth, googleAuthProvider);
            return await handleUserLogin({ userCredential, thunkAPI});;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Login failed by google provider');
        }
    }
);

export const requestUserLoginByFacebook = createAsyncThunk(
    Actions.requestUserLoginByFacebook,
    async (_, thunkAPI) => {
        try {
            const userCredential = await signInWithPopup(auth, facebookAuthProvider);
            return await handleUserLogin({ userCredential, thunkAPI});;            
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Login failed by facebook provider');
        }
    }
);

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state: any) => {
            state.currentUser = null;
            state.status = 'idle';
            state.isLoading = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestUserLoginByEmail.pending, (state: any) => {
                state.status = 'pending';
                state.isLoading = true;
            })
            .addCase(requestUserLoginByEmail.fulfilled, (state: any, action) => {
                state.status = 'fulfilled';
                state.currentUser = action.payload;
                state.isLoading = false;
            })
            .addCase(requestUserLoginByEmail.rejected, (state: any) => {
                state.status = 'rejected';
                state.isLoading = false;
            })
            .addCase(requestUserLoginByGoogle.pending, (state: any) => {
                state.status = 'pending';
                state.isLoading = true;
            })
            .addCase(requestUserLoginByGoogle.fulfilled, (state: any, action) => {
                state.status = 'fulfilled';
                state.currentUser = action.payload;
                state.isLoading = false;
            })
            .addCase(requestUserLoginByGoogle.rejected, (state: any) => {
                state.status = 'rejected';
                state.isLoading = false;
            })
            .addCase(requestUserLoginByFacebook.pending, (state: any) => {
                state.status = 'pending';
                state.isLoading = true;
            })
            .addCase(requestUserLoginByFacebook.fulfilled, (state: any, action) => {
                state.status = 'fulfilled';
                state.currentUser = action.payload;
                state.isLoading = false;
            })
            .addCase(requestUserLoginByFacebook.rejected, (state: any) => {
                state.status = 'rejected';
                state.isLoading = false;
            })
    },
});

export const { logout } = LoginSlice.actions;
export default LoginSlice.reducer;