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
import myCrypt from "../../../helpers/myCrypt.js";
let Organization = class Organization {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Organization.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Organization.prototype, "name", void 0);
__decorate([
    Column({
        transformer: myCrypt
    }),
    __metadata("design:type", String)
], Organization.prototype, "email", void 0);
__decorate([
    Column({
        transformer: myCrypt
    }),
    __metadata("design:type", String)
], Organization.prototype, "password_hash", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Organization.prototype, "cnpj", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Organization.prototype, "phone", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Organization.prototype, "address", void 0);
__decorate([
    OneToMany('Event', 'organization'),
    __metadata("design:type", Array)
], Organization.prototype, "events", void 0);
Organization = __decorate([
    Entity()
], Organization);
export { Organization };
