
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate} from "typeorm";
import { TicketInterface } from "../Ticket/ticket.interface.js";

import dotenv from 'dotenv';
import myCrypt from "../../../helpers/myCrypt.js";

dotenv.config();

@Entity()
export class Customer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        transformer: myCrypt
    })
    email: string;

    @Column({
        transformer: myCrypt
    })
    password_hash?: string;

    @Column({
        transformer: myCrypt
    })
    cpf: string;

    @Column({
        transformer: myCrypt
    })
    phone: string;

    @Column()
    participation: number;

    @OneToMany('Ticket', 'customer')
    tickets: TicketInterface[];
}
