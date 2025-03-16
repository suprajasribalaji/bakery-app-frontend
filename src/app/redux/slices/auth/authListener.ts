import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Actions } from "../../actions/actionPayload";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setCurrentUser, setLoading } from "./auth";

export const ListenToAuthChanges = createAsyncThunk(
    Actions.listenToAuthChanges,
    async (_, { dispatch }) => {
        const auth = getAuth();
        
        return new Promise<void>((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, async (user) => {
                if (user) {
                    console.log('Firebase user detected: ', user);
                    dispatch(setCurrentUser({ email: user.email }));
                } else {
                    console.log('No user detected');
                    dispatch(setCurrentUser(null));
                }
                dispatch(setLoading(false));
                resolve();
            });

            return unsubscribe; // Ensure unsubscribe is returned
        });
    }
);

const initialState = {
    isLoading: true,
}

const AuthListenerSlice = createSlice({
    name: 'authListener',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(ListenToAuthChanges.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(ListenToAuthChanges.fulfilled, (state: any, action) => {
                state.currentUser = action.payload;
                state.status = 'fulfilled';
                state.error = null;
            })
            .addCase(ListenToAuthChanges.rejected, (state: any, action) => {
                state.status = 'rejected';
                state.error = action.payload;
            })
    }
});

export default AuthListenerSlice.reducer;