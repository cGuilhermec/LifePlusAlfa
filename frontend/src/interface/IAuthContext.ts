import { createContext } from "react";
import { AuthContextType } from "./IAuthContextType";

export const AuthContext = createContext<AuthContextType> ({
    user: null,
    Signed: false,
    SignIn: async()=>{},
    SignOut: async()=>{}
})