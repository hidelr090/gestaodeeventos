import jwt from 'jsonwebtoken';
import authConfig from '../../../config/auth.js';
import { unauthorized } from '../../../utils/httpStatus.js';
export default async function authMiddleware(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return unauthorized(res, 'Token não informado!');
    }
    const token = authorization.replace('Bearer', '').trim();
    try {
        const data = jwt.verify(token, authConfig.secret || 'secret');
        const { id } = data;
        req.userId = id;
        return next();
    }
    catch (_a) {
    }
}
