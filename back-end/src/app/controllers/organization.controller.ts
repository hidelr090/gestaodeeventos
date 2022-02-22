import { getRepository } from "typeorm";
import { Organization } from "../models/Organization/organization.entity.js";
import { Request, Response } from "express";
import { internalServerError, ok, badRequest} from "../../utils/httpStatus.js";

class OrganizationController {
    async index(req: Request, res: Response) : Promise<object> {
        try {
            const organizations = await getRepository(Organization).find({
                select: ["id", "name", "email", "cnpj", "phone", "address"],
            });

            return organizations ? res.json(organizations) : badRequest(res, 'Nenhuma organização encontrada!');
        }catch(err) {
            return internalServerError(res, 'Erro ao buscar organizações!');
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
            return organization ? ok(res, 'Organização cadastrada!') : badRequest(res, 'Organização já cadastrada!');
        }catch(err){
            return internalServerError(res, 'Erro ao cadastrar organização!');
        }
    }

    async update(req: Request, res: Response) : Promise<object>{
        const organizationRepository = getRepository(Organization);
        try{
            const organization = await organizationRepository.findOne({id: req.userId});

            if(organization){
                await organizationRepository.update({id: req.userId}, req.body);
                return ok(res, 'Organização atualizada com sucesso!');
            }else{
                return badRequest(res, 'Organização não encontrada!');
            }
        }catch(err){
            return internalServerError(res, 'Erro ao atualizar organização!');
        }
    }
}

export default new OrganizationController();