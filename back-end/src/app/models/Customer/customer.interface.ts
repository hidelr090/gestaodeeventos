export interface CustomerInterface {
    id: string;
    name: string;
    email: string;
    password_hash?: string;
    cpf: string;
    phone: string;
    participation: number;
    created_at: Date;
    updated_at: Date;
}