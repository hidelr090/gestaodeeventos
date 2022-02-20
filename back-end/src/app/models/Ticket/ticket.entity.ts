import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne} from "typeorm";
import { CustomerInterface } from "../Customer/customer.interface.js";
import { EventInterface } from "../Event/event.interface.js";


@Entity()
export class Ticket {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    price: number;

    @Column()
    availability: boolean;

    @Column()
    payment_method: string;

    @ManyToOne('Customer', 'tickets', {
        nullable: true,
    })
    customer: CustomerInterface;

    @OneToOne('Event', 'tickets', {
        nullable: false,
    })
    event: EventInterface;
} 