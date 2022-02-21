export interface EventInterface {
    id: string;
    name: string;
    description: string;
    start_date: Date;
    location: string;
    organization_id: string;
    capacity: number;
    price: number;
    created_at: Date;
    updated_at: Date;
}