import dotenv from 'dotenv';
dotenv.config();
const auth = {
    secret: process.env.AUTH_SECRET as string | undefined,
    expires: '1h'
}

export default auth;