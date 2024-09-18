import { Request, Response } from "express"
import { IUserLogin } from "../interfaces/IUserLogin";
import { LoginService } from "../service/LoginService";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY || "";

class LoginController {

    private loginService: LoginService;

    constructor(){
        this.loginService = new LoginService();
        this.userLogin = this.userLogin.bind(this); // Garante o contexto correto de `this`
    }   


    async userLogin(req: Request, res: Response) {
        const {email, password} = req.body;

        try {

            if(!email || !password){
                return res.status(400).json({message: 'Email e senha são obrigatórios.'});
            };

            const user: IUserLogin = { email, password };
            const token = await this.loginService.authentication(user);

            if(token) {
                //Se o usuário for autenticado com sucesso, enviamos a resposta com o token
                const decodedToken: any = jwt.verify(token, SECRET_KEY);
                const name = decodedToken.name;
                const last_name = decodedToken.last_name;
                const fullName = `${name} ${last_name}`;

                res.status(200).json({ message: 'Usuário autenticado com sucesso!', token, user: user.email, name, last_name, fullName });
            } else {
                res.status(400).json({ message: 'Credenciais inválidas!' });
            }

        } catch (error) {
            res.status(400).json({ message: 'Erro ao autenticar o usuário: ' + error });
        };

    };

};

export const loginController = new LoginController(); 