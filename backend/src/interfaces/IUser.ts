export interface IUser {

    name: string;
    last_name: string;
    email: string;
    password: string;
    age: number;
    weight: {weight: number, date: string}[];
    gender: string;
    height: number;
    kcalDaily: number;
    goalWeight: number;

}