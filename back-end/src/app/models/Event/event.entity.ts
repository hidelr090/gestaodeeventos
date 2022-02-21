import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { TicketInterface } from "../Ticket/ticket.interface.js";
import { OrganizationInterface } from "../Organization/organization.interface.js";
import { Organization } from "../Organization/organization.entity.js";

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

    @Column()
    capacity: number;

    @Column()
    price: number;

    @OneToMany('Ticket', 'event',{
        cascade: true,
    })
    tickets: TicketInterface[];

    @ManyToOne(()=>Organization, organization => organization.events, {
        nullable: false,
    })
    @JoinColumn({name: 'organization_id', referencedColumnName: 'id'})
    organization: Organization;

}