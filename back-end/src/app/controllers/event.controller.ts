import { getRepository, Like } from "typeorm";
import {Request, Response} from "express";
import {Event} from "../models/Event/event.entity.js";
import { Organization } from "../models/Organization/organization.entity.js";
import { badRequest, internalServerError, ok} from "../../utils/httpStatus.js";

class EventController{
    async index(req: Request, res: Response) : Promise<object> {
        try {
            const events = await getRepository(Event).find();
            return events ? res.json(events) : badRequest(res, 'Nenhum evento encontrado!');
        }catch(err) {
            return internalServerError(res, 'Erro ao buscar eventos!');
        }
    }

    async store(req: Request, res: Response) : Promise<object>{
        const eventRepository = getRepository(Event);
        try{
            if(!await getRepository(Organization).find({where: [{id: req.userId}]})){
                return badRequest(res, 'Organização não encontrada!');
            }

            const register = {...req.body, organization: {id: req.userId}};

            let event = null;
            event = await eventRepository.save(register);

            return event ? ok(res, 'Evento cadastrado com sucesso!') : badRequest(res, 'Evento nao cadastrado!');

        }catch(err){
            return res.status(500).json({
                message: 'Erro ao salvar evento',
                data: err
            });
        }
    }

    async find (req: Request, res: Response) : Promise<object>{
        const eventRepository = getRepository(Event);
        try{
            const event = await eventRepository.findOne({
                where: 
                    
                        {name:Like(`%${req.query.name}%`),
                        description:Like(`%${req.query.description}%`),
                        location:Like(`%${req.query.location}%`)}
                     
            });
            return event ? res.json(event) : badRequest(res, 'Nenhum evento encontrado!');
        }catch(err){
            return internalServerError(res, 'Erro ao buscar eventos!');
        }
    }

    async update(req: Request, res: Response) : Promise<object>{
        const eventRepository = getRepository(Event);
        try{
            if(!await getRepository(Organization).find({where: [{id: req.userId}]})){
                return badRequest(res, 'Organização não encontrada!');
            }

            const event = await eventRepository.findOne({id: req.params.id});
        
            if(event && event.organization.id === req.userId){
                await eventRepository.update({id: req.params.id}, req.body);
                return ok(res, 'Evento atualizado com sucesso!');
            }else if(!event){
                return badRequest(res, 'Evento não encontrado!');
            }else {
                return badRequest(res, 'Evento não pertence a sua organização!');
            }

        }catch(err){
            return internalServerError(res, 'Erro ao atualizar evento!');
        }
    }
}

export default new EventController();