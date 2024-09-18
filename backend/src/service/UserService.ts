import { IUser } from "../interfaces/IUser";
import { hash } from 'bcryptjs';
import { UserModel } from "../model/UserModel";


export class UserService {
    private userModel: UserModel;

    constructor() {
        this.userModel = new UserModel();
    }

    async createUser(user: IUser){

        const verifyIfUserExists = await this.userModel.getUserByEmail(user.email);

        if(verifyIfUserExists) {
            return `Email ${user.email} já cadastrado!`;
        };

        const hash_password = await hash(user.password, 8);
        user.password = hash_password;

        await this.userModel.createUser(user);

        return true;

    };

    async verifyIfUserExists(email: string){

        const verifyIfUserExists = await this.userModel.getUserByEmail(email);

        if(verifyIfUserExists) {
            return `Email ${email} já cadastrado!`;
        };

        return true;

    };

    async updateUser( data: Partial<IUser>, email: string ) {

        if (!data || Object.keys(data).length === 0) {
            throw new Error('Nenhum dado fornecido para atualização');
        };

        if(data && data.password) {
            data.password = await hash(data.password, 8);
        };

        const updateUser = await this.userModel.updateUser(data, email);

        return updateUser;

    };

};
