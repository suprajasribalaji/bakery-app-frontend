export interface CurrentUserPayload {
    username?: string | null;
    email: string | null;
    uid: any;
    displayName: any;
};

export interface AuthStatePayload {
    currentUser: CurrentUserPayload | null;
    status: "idle" | "pending" | "fulfilled" | "rejected";
    isLoading: boolean;
};