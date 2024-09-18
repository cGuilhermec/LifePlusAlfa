import { Request, Response } from 'express';
import { UserService } from '../service/UserService';
import { UserModel } from '../model/UserModel';

class UserController {
    private userService: UserService;
    private userModel: UserModel;

    constructor() {
        this.userService = new UserService();
        this.userModel = new UserModel();
    }

    createUser = async ( req: Request, res: Response ) => {
        const { name, last_name, email, password, age, weight, gender, height, kcalDaily, goalWeight} = req.body; 

       try {
            const result = await this.userService.createUser({
                name,
                last_name,
                email,
                password,
                age,
                weight,
                gender,
                height,
                kcalDaily,
                goalWeight
            });

            // Enviar resposta de sucesso
            if(result === true ){
                res.status(201).json({ message: 'Usuário criado com sucesso!' });
            } else {
                res.status(201).json({ message: result });
            }

        } catch (error) {
            // Verifique se `error` é uma instância de `Error`
            if (error instanceof Error) {
                console.error('Erro ao criar usuário:', error.message); // Use error.message
                res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
            } else {
                // Caso o erro não seja uma instância de `Error`, trate-o como um erro desconhecido
                console.error('Erro desconhecido ao criar usuário:', error);
                res.status(500).json({ message: 'Erro desconhecido ao criar usuário' });
            }
        };

    };

    verifyIfUserExists = async (req: Request, res: Response) => {

        const { email } = req.body;

        try {
            
            const result = await this.userService.verifyIfUserExists(email);

            if(result === true) {
                res.status(201);
            };

            res.status(201).json({ message: result });

        } catch (error) {
             if (error instanceof Error) {
                console.error('Erro ao criar usuário:', error.message); // Use error.message
                res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
            }
        };

    };

    updateUser = async (req: Request, res: Response) => {
        const {emailParams} = req.params;
        const { name, last_name, email, password, weight, height, gender, goalWeight } = req.body;

        try {
            
            const updateUser = await this.userService.updateUser(
            { name, last_name, email, password, weight, height, gender, goalWeight },
            emailParams
        );

            if(updateUser) {
                res.status(200).json({ message: 'Usuário atualizado com sucesso', user: updateUser });
            } else {
                res.status(404).json({ message: 'Usuário não encontrado' });
            };


        } catch (error) {
            if( error instanceof Error ) {
                console.error('Erro ao atualizar o usuário: ', error.message);
                res.status(500).json({ message: 'Erro ao atualizar o usuário', erro: error.message });
            } else {
                console.error('Erro desconhecido ao atualizar o usuário: ', error);
                res.status(500).json({ message: 'Erro desconhecido ao atualizar o usuário' });
            };
        };
    };

    getAllInfosUserByEmail = async (req: Request, res: Response) => {

        try {
            
            const { email } = req.params;

            const userInfos = await this.userModel.getAllInfosUserByEmail(email);

            res.status(200).json(userInfos);

        } catch (error) {
            if( error instanceof Error ) {
                console.error('Erro ao pegar informações do usuário: ', error.message);
                res.status(500).json({ message: 'Erro ao pegar informações do usuário', erro: error.message });
            } else {
                console.error('Erro desconhecido ao pegar informações do usuário: ', error);
                res.status(500).json({ message: 'Erro desconhecido ao pegar informações do usuário' });
            };
        };

    };

};

export const userController = new UserController(); 