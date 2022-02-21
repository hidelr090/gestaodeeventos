import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import authConfig from '../../../config/auth.js';

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default async function authMiddleware(req: Request, res: Response, next: NextFunction){
    const  { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({
            error: 'Token nao fornecido!'
        });
    }

    const token = authorization.replace('Bearer', '').trim();



    try {
        const data = jwt.verify(token, authConfig.secret || 'secret');
        const { id } = data as TokenPayload;

        req.userId = id;

        return next();
    }catch {
        
    }
}