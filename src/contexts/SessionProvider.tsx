import { useStorageState } from "@/hooks/useStorageState";
import { createContext, PropsWithChildren, useContext } from "react";

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    session?: string | null; // token
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: true,
});

export function useSession() {
    const value = useContext(AuthContext);

    if (process.env.NODE_ENV !== "production") {
        if (!value) {
            throw new Error("useSession must be used within a SessionProvider");
        }
    }

    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState("session");

    return (
        <AuthContext.Provider
            value={{
                signIn: () => {
                    // Perform sign-in logic
                    setSession("token");
                },
                signOut: () => {
                    // Perform sign-out logic
                    setSession(null);
                },
                session,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}