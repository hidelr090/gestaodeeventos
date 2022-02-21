import { getRepository } from "typeorm";
import { Customer } from "../models/Customer/customer.entity.js";
import {Request, Response} from "express";

class CustomerController {
    
    async index(req: Request, res: Response) : Promise<object> {
        try {
            const customers = await getRepository(Customer).find({
                select: ["id", "name"],
            });
            
            return customers ? res.json(customers) : res.status(400).json({message: 'Clientes nao encontrados!'});
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
            const found = await customerRepository.find({where: [{email:req.body.email},{cpf:req.body.cpf}]});
            if(found.length === 0){
                customer = await customerRepository.save(req.body);
            }
            return customer ? res.status(200).json({message: 'Cliente cadastrado com sucesso!'}) : res.status(400).json({message: 'Cliente ja cadastrado!'});

        }catch(err){
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
            return res.status(500).json({
                message: 'Erro ao atualizar cliente',
                data: err
            });
        }
    }

}

export default new CustomerController();