import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Actions } from "../../actions/actionPayload";
import { signOut } from "firebase/auth";
import { auth } from "@/app/config/firebase.config";
import { clearCurrentUser } from "../auth/auth";
import { AuthStatePayload } from "../auth/authPayload";

const initialState: AuthStatePayload = {
    isLoading: false,
    currentUser: null,
    status: 'idle',
};

export const requestUserLogout = createAsyncThunk(
    Actions.requestUserLogout,
    async (_, thunkAPI) => {
        try {
            await signOut(auth);
            thunkAPI.dispatch(clearCurrentUser());
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Logout failed');
        }
    }
);

const LogoutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestUserLogout.pending, (state: any) => {
                state.isLoading = true;
                state.status = 'pending';
            })
            .addCase(requestUserLogout.fulfilled, (state: any) => {
                state.currentUser = null;
                state.isLoading = false;
                state.status = 'fulfilled';
            })
            .addCase(requestUserLogout.rejected, (state: any) => {
                state.isLoading = false;
                state.status = 'rejected';
            })
    },
});

export default LogoutSlice.reducer;