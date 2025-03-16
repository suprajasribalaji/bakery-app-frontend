import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { ReactNode, useEffect } from "react";
import { ListenToAuthChanges } from "./authListener";

interface AuthProviderProps {
    children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("AuthProvider mounted. Listening for auth changes...");
        dispatch(ListenToAuthChanges());
    }, [dispatch]);

    return <>{children}</>;
};
