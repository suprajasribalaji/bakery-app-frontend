import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStatePayload, CurrentUserPayload } from "./authPayload";

const initialState: AuthStatePayload = {
    currentUser: null,
    status: 'idle',
    isLoading: true,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<CurrentUserPayload | null>) {
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        clearCurrentUser(state) {
            state.currentUser = null;
            state.isLoading = false;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        }
    },
});

export const { setCurrentUser, clearCurrentUser, setLoading } = AuthSlice.actions;
export default AuthSlice.reducer;
