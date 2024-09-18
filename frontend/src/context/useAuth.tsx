import React, { useEffect, useState } from "react";
import { AuthContextProps } from "../interface/IAuthContextProps";
import { Navigate } from "react-router-dom";
import { User } from "../interface/IUser";
import { SingInProps } from "../interface/SignInProps";
import { api } from "../api/api";
import { AuthContext } from "../interface/IAuthContext";

export const AuthProvider: React.FC <AuthContextProps> = ({children})=>{
    const [user, setUser] = useState<User|null>(null);

    useEffect(()=>{
        const loadingStorageData = () => {
            const storageToken = localStorage.getItem("@Auth:Token");
            const storageUser = localStorage.getItem("@Auth:User");


            if(storageToken && storageUser){
                try {
                    const userObject:User = JSON.parse(storageUser);
                    setUser(userObject);

                } catch (error) {
                    console.error("Erro ao analisar os dados do usuário: ", error);
                }
            }
        }
        
        loadingStorageData();
},[]);

    const SignIn = async({email, password}: SingInProps):Promise<void> =>{
        try {
            const response = await api.post("/login", {email, password});
            const {fullName, token, user} = response.data as any;
            
            setUser(user);
            
            localStorage.setItem("@Auth:Token", token);
            localStorage.setItem("@Auth:fullName", fullName);
            localStorage.setItem("@Auth:User", JSON.stringify(user));
            
        } catch (error) {
            alert("E-mail ou senha inválidos, tente novamente!");
        }
    }

    const SignOut = ()=>{
    localStorage.removeItem("@Auth:Token");
        setUser(null);
        return < Navigate to="/" />;
    }

    return(
        <AuthContext.Provider value={{user, Signed:!!user, SignIn, SignOut}}>
            {children}
        </ AuthContext.Provider>
    )
}