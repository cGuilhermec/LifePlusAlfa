import jwt from "jsonwebtoken";
import { IUserLogin } from "../interfaces/IUserLogin";
import bcryptjs from 'bcryptjs';
import dotenv from "dotenv";
import { UserModel } from "../model/UserModel";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || '';

export class LoginService {

    private userModel: UserModel;

    constructor(){
        this.userModel = new UserModel();
    }

    async authentication( user: IUserLogin ): Promise<string | null > {

        const userLoginAuth = await this.userModel.getUserByEmail(user.email);

        if(!userLoginAuth) return ('userLoginAuth: '+ null);

        const isValidPassword = await bcryptjs.compare(user.password, userLoginAuth.password);

        if(!isValidPassword) return ('isValidPassword: '+ null);

        const token = jwt.sign({ id: userLoginAuth.id, email: userLoginAuth.email, name: userLoginAuth.name, last_name: userLoginAuth.last_name  }, SECRET_KEY);

        return token;

    };

};