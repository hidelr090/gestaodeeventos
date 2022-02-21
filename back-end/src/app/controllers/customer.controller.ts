import { getRepository } from "typeorm";
import { Customer } from "../models/Customer/customer.entity.js";
import {Request, Response} from "express";

class CustomerController {
    
    async index(req: Request, res: Response) : Promise<object> {
        try {
            const customers = await getRepository(Customer).find();
            
            return customers ? res.json(customers.map((customer)=>delete customer.password_hash)) : res.status(404).json({message: 'Clientes nao encontrados!'});
        }catch(err) {
            return res.status(500).json({
                message: 'Erro ao listar clientes',
                data: err
            });
        }
    }

    async store(req: Request, res: Response) : Promise<object>{
        const customerRepository = getRepository(Customer);
        try{
            let customer = null;
            if(!await customerRepository.find({where: [{email:req.body.email},{cpf:req.body.cpf}]})){
                customer = await customerRepository.save(req.body);
            }
            return customer ? res.status(200).json({message: 'Cliente cadastrado com sucesso!'}) : res.status(409).json({message: 'Cliente ja cadastrado!'});

        }catch(err){
            console.error(err);
            return res.status(500).json({
                message: 'Erro ao salvar cliente',
                data: err
            });
        }
    }

    async update(req: Request, res: Response) : Promise<object>{
        const customerRepository = getRepository(Customer);
        try{
            const customer = await customerRepository.findOne({id: req.userId});

            if(customer){
                await customerRepository.update({id: req.userId}, req.body);
                return res.status(200).json({message: 'Cliente atualizado com sucesso!'});
            }else{
                throw new Error('Ocorreu algum problema!');
            }
        }catch(err){
            console.error(err);
            return res.status(500).json({
                message: 'Erro ao atualizar cliente',
                data: err
            });
        }
    }

}

export default new CustomerController();