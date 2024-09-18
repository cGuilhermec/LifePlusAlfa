import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY || '';

export class AuthMiddleware {

    static async authenticateToken(req: Request, res: Response, next: NextFunction) {

        try {
        
            // Extrai o token JWT do cabeçalho de autorização da requisição HTTP, assumindo que o token está no formato "Bearer token"
            const token = req.headers['authorization']?.split(' ')[1];

            if(!token) {
                res.status(401).json({message: 'Token de autenticação não foi fornecido.'});
                return;
            };

            jwt.verify(token, SECRET_KEY, (err) => {
                
                if(err) {
                    res.status(403).json({message: 'Falha ao verificar o token de autenticação.'});
                    return;
                };

            });

            next();

        } catch (error) {
            throw new Error('Erro no sistema, contate um administrador: '+ error);
        };

    };

};