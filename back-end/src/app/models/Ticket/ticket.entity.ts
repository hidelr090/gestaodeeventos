import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { CustomerInterface } from "../Customer/customer.interface.js";
import { EventInterface } from "../Event/event.interface.js";


@Entity()
export class Ticket {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    payment_method: string;

    @ManyToOne('Customer', 'tickets', {
        nullable: true,
    })
    @JoinColumn({name: 'customer_id', referencedColumnName: 'id'})
    customer: CustomerInterface;

    @OneToOne('Event', 'tickets', {
        nullable: false,
    })
    @JoinColumn({name: 'event_id', referencedColumnName: 'id'})
    event: EventInterface;
} 