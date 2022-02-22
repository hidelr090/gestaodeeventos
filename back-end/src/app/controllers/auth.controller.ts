import { getRepository } from "typeorm";
import { Customer } from "../models/Customer/customer.entity.js";
import { Organization } from "../models/Organization/organization.entity.js";
import { Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import auth from '../../config/auth.js'
import { badRequest, internalServerError } from "../../utils/httpStatus.js";

class Authentication {
    async authCustomer (req: Request, res: Response) : Promise<object>{
        const customerRepository = getRepository(Customer);
        const {email, password_hash} = req.body;
        try {
            const customer = await customerRepository.findOne({
                where:{
                    email,
                    password_hash
                }
            });

            if(!customer){
                return res.sendStatus(401);
            }

            const token = jwt.sign({id: customer.id}, auth.secret || 'secret', {expiresIn: '3h'});

            delete customer.password_hash;
            return res.json({
                customer,
                token
            });
        }catch(err){
            return internalServerError(res, 'Falha na autenticação!');
        }
    }

    async authOrganization (req: Request, res: Response) : Promise<object>{
        const orgRepository = getRepository(Organization);
        const {email, password_hash} = req.body;
        try {
            const organization = await orgRepository.findOne({
                where:{
                    email,
                    password_hash
                }
            });

            if(!organization){
                return badRequest(res, 'Usuário ou senha inválidos!');
            }

            const token = jwt.sign({id: organization.id}, auth.secret || 'secret', {expiresIn: '3h'});

            delete organization.password_hash;
            return res.json({
                organization,
                token
            });
        }catch(err){
            return internalServerError(res, 'Falha na autenticação!');
        }
    }
}

export default new Authentication();