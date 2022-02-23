var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import dotenv from 'dotenv';
import myCrypt from "../../../helpers/myCrypt.js";
dotenv.config();
let Customer = class Customer {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Customer.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    Column({
        transformer: myCrypt
    }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    Column({
        transformer: myCrypt
    }),
    __metadata("design:type", String)
], Customer.prototype, "password_hash", void 0);
__decorate([
    Column({
        transformer: myCrypt
    }),
    __metadata("design:type", String)
], Customer.prototype, "cpf", void 0);
__decorate([
    Column({
        transformer: myCrypt
    }),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Customer.prototype, "participation", void 0);
__decorate([
    OneToMany('Ticket', 'customer'),
    __metadata("design:type", Array)
], Customer.prototype, "tickets", void 0);
Customer = __decorate([
    Entity()
], Customer);
export { Customer };
