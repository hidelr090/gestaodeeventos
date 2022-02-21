import { getRepository, Like } from "typeorm";
import {Request, Response} from "express";
import {Event} from "../models/Event/event.entity.js";
import { Organization } from "../models/Organization/organization.entity.js";

class EventController{
    async index(req: Request, res: Response) : Promise<object> {
        try {
            const events = await getRepository(Event).find();
            return events ? res.json(events) : res.status(404).json({message: 'Eventos nao encontrados!'});
        }catch(err) {
            return res.status(500).json({
                message: 'Erro ao listar eventos',
                data: err
            });
        }
    }

    async store(req: Request, res: Response) : Promise<object>{
        const eventRepository = getRepository(Event);
        try{
            if(!await getRepository(Organization).find({where: [{id: req.userId}]})){
                throw new Error('Organização não encontrada!');
            }

            let event = null;
            if(!await eventRepository.find({
                where: [
                    {name:Like(`%${req.body.name}%`)},
                    {description:Like(`%${req.body.description}%`)}
                ]
            })){
                    
                event = await eventRepository.save({...req.body, organization_id: req.userId});
            }
            return event ? res.status(200).json({message: 'Evento cadastrado com sucesso!'}) : res.status(409).json({message: 'Evento ja cadastrado!'});

        }catch(err){
            console.error(err);
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
                    [
                        {name:Like(`%${req.query.name}%`)},
                        {description:Like(`%${req.query.description}%`)},
                        {location:Like(`%${req.query.location}%`)}
                    ] 
            });
            return event ? res.json(event) : res.status(404).json({message: 'Evento nao encontrado!'});
        }catch(err){
            return res.status(500).json({
                message: 'Erro ao buscar evento',
                data: err
            });
        }
    }

    async update(req: Request, res: Response) : Promise<object>{
        const eventRepository = getRepository(Event);
        try{
            if(!await getRepository(Organization).find({where: [{id: req.userId}]})){
                throw new Error('Organização não encontrada!');
            }
            
            const event = await eventRepository.findOne({id: req.params.id});
        
            if(event && event.organization.id === req.userId){
                await eventRepository.update({id: req.params.id}, req.body);
                return res.status(200).json({message: 'Evento atualizado com sucesso!'});
            }else if(!event){
                return res.status(404).json({message: 'Evento nao encontrado!'});
            }else {
                return res.status(401).json({message: 'Operação não autorizada!'});
            }

        }catch(err){
            return res.status(500).json({
                message: 'Erro ao atualizar evento',
                data: err
            });
        }
    }
}

export default new EventController();