import { User } from "./IUser";
import { SingInProps } from "./SignInProps";

export interface AuthContextType {
    user: User | null,
    Signed: boolean,
    SignIn: ({email,password}:SingInProps)=>Promise<void>,
    SignOut: ()=>void;
}