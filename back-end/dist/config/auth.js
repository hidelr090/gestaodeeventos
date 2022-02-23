import dotenv from 'dotenv';
dotenv.config();
const auth = {
    secret: process.env.AUTH_SECRET,
    expires: '1h'
};
export default auth;
