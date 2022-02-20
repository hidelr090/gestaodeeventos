import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { TicketInterface } from "../Ticket/ticket.interface.js";
import { OrganizationInterface } from "../Organization/organization.interface.js";

@Entity()
export class Event {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    start_date: Date;

    @Column()
    location: string;

    @OneToMany('Ticket', 'event')
    tickets: TicketInterface[];

    @ManyToOne('Organization', 'events', {
        nullable: false,
    })
    organization: OrganizationInterface;

}