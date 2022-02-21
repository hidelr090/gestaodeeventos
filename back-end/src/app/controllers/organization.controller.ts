import { getRepository } from "typeorm";
import { Organization } from "../models/Organization/organization.entity.js";
import { Request, Response } from "express";

class OrganizationController {
    async index(req: Request, res: Response) : Promise<object> {
        try {
            const organizations = await getRepository(Organization).find();
            const result = organizations.map((organization)=>{
                return {
                    id: organization.id,
                    name: organization.name,
                    email: organization.email,
                    cnpj: organization.cnpj,
                    phone: organization.phone,
                    address: organization.address,                
                }
            });
            return organizations ? res.json(result) : res.status(400).json({message: 'Organizações não encontradas!'});
        }catch(err) {
            return res.status(500).json({
                message: 'Erro ao listar organizações',
                data: err
            });
        }
    }

    async store(req: Request, res: Response) : Promise<object>{
        const organizationRepository = getRepository(Organization);
        try{
            let organization = null;
            const found = await organizationRepository.find({where: [{email:req.body.email},{cnpj:req.body.cnpj}]});
            if(found.length === 0){
                organization = await organizationRepository.save(req.body);
            }
            return organization ? res.status(200).json({message: 'Organização cadastrada com sucesso!'}) : res.status(400).json({message: 'Organização ja cadastrada!'});
        }catch(err){
            return res.status(500).json({
                message: 'Erro ao salvar Empresa',
                data: err
            });
        }
    }

    async update(req: Request, res: Response) : Promise<object>{
        const organizationRepository = getRepository(Organization);
        try{
            const organization = await organizationRepository.findOne({id: req.userId});

            if(organization){
                await organizationRepository.update({id: req.userId}, req.body);
                return res.status(200).json({message: 'Organização atualizada com sucesso!'});
            }else{
                throw new Error('Ocorreu algum problema!');
            }
        }catch(err){
            return res.status(500).json({
                message: 'Erro ao atualizar organização',
                data: err
            });
        }
    }
}

export default new OrganizationController();