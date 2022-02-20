export interface OrganizationInterface {
    id: string;
    name: string;
    description: string;
    password_hash: string;
    cnpj: string;
    phone: string;
    address: string;
    created_at: Date;
    updated_at: Date;
}