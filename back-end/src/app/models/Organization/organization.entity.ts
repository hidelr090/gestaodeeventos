
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import { EventInterface } from "../Event/event.interface.js";
import myCrypt from "../../../helpers/myCrypt.js";

@Entity()
export class Organization {
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

    @Column()
    cnpj: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToMany('Event', 'organization')
    events: EventInterface[];

}