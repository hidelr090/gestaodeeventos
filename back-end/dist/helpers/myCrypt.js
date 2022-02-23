import { EncryptionTransformer } from "typeorm-encrypted";
const myCrypt = new EncryptionTransformer({
    key: `${process.env.ENCRYPT_KEY}`,
    algorithm: 'aes-256-cbc',
    ivLength: 16,
    iv: `${process.env.ENCRYPT_IV}`
});
export default myCrypt;
