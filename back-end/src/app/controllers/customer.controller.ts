import { getRepository, getConnectionManager} from "typeorm";
import { Customer } from "../models/Customer/customer.entity.js";
import {Request, Response} from "express";

class CustomerController {
    
    async index(req: Request, res: Response) {
        try {
            const customers = await getRepository(Customer).find();
            
            return customers ? res.json(customers) : res.status(404).json({message: 'Clientes nao encontrados!'});
        }catch(err) {
            res.status(500).json({
                message: 'Erro ao listar clientes',
                data: err
            });
            throw err;
        }
    }

    async store(req: Request, res: Response) {
        const customerRepository = getRepository(Customer);
        try{
            let customer = null;
            if(!await customerRepository.find({where: [{email:req.body.email},{cpf:req.body.cpf}]})){
                customer = await customerRepository.save(req.body);
            }
            return customer ? res.status(200).json({message: 'Cliente cadastrado com sucesso!'}) : res.status(409).json({message: 'Cliente ja cadastrado!'});

        }catch(err){
            console.error(err);
            res.status(500).json({
                message: 'Erro ao salvar cliente',
                data: err
            });
            throw err;
        }
    }
}

export default new CustomerController();