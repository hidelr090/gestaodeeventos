import { getRepository, Like } from "typeorm";
import { Ticket } from "../models/Ticket/ticket.entity.js";
import { Request, Response } from "express";
import {Event} from "../models/Event/event.entity.js";
import { badRequest, internalServerError, ok } from "../../utils/httpStatus.js";

class TicketController {
    async index(req: Request, res: Response) {
        try {
            const tickets = await getRepository(Ticket).find({
                where: {
                    event_id: req.query.event_id
                }
            });
            return tickets ? res.json(tickets) : badRequest(res, "Nenhum ticket encontrado!");
        } catch (err) {
            return internalServerError(res, "Erro ao buscar tickets!");
        }
    }
    
    async store(req: Request, res: Response) {
        const ticketRepository = getRepository(Ticket);
        try {
            const amount  = req.query.amount || 1;
            
            const count = await ticketRepository.count({where:{event:{id: req.query.event_id}}});
            const event = await getRepository(Event).findOne({where:{id: req.query.event_id}});
            const total : any = count;
            const capacity : any = event?.capacity;

            let ticketList = [];
            for(let i = 0; i < amount; i++){
                ticketList.push({ ...req.body, event:{id: req.query.event_id}, customer:{id: req.userId}});
            }
            if(total + amount <= capacity){
                try{
                    await ticketRepository.save(ticketList);
                }catch{
                    return badRequest(res, "Erro ao salvar tickets!");
                }
            }else{
                return badRequest(res, "Capacidade do evento excedida!");
            }

            return ok(res, "Tickets cadastrados com sucesso!");
        } catch (err) {
            return internalServerError(res, "Erro ao buscar tickets!");
        }
    }
}

export default new TicketController();