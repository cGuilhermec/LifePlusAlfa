import { IUser } from "../interfaces/IUser";
import User from "./User-Schema";


export class UserModel {

    async createUser(user: IUser): Promise<void> {

        // Obtendo a data atual
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');   // Adiciona zero à esquerda se necessário
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Meses começam em 0
        const year = today.getFullYear().toString();

        // Formatando a data como "dd/mm/yyyy"
        const formattedDate = `${day}/${month}/${year}`;

        const now = new Date();
        const isoString = now.toISOString();
        // console.log(isoString); // Exemplo: "2024-09-05T14:30:00.000Z"
        // console.log(formattedDate); // Exemplo: "2024-09-05T14:30:00.000Z"

        await User.create(user);

    };

    async getUserByEmail(email: string) {

        const response = User.findOne({email: email});

        return response;

    };

    async updateUser(data: Partial<IUser>, email: string) {
        if (!data || Object.keys(data).length === 0) {
            throw new Error('Nenhum dado fornecido para atualização');
        };

        // Filtrar campos nulos ou indefinidos
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value != null)
        );

        if (Object.keys(filteredData).length === 0) {
            throw new Error('Nenhum dado válido para atualização');
        }

        const result = await User.findOneAndUpdate(
            { email: email },
            { $set: filteredData },  // Atualiza apenas os campos que não são nulos ou indefinidos
            { returnDocument: 'after' }  // Retorna o documento atualizado
        );

        return result;  // Retorna o documento atualizado
    }

    async getAllInfosUserByEmail(email: string) {

        const users = User.findOne({email: email});

        return users;

    };   

};