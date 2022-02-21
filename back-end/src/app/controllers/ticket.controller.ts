import { getRepository, Like } from "typeorm";
import { Ticket } from "../models/Ticket/ticket.entity.js";
import { Request, Response } from "express";
import {Customer} from "../models/Customer/customer.entity.js";
import {Event} from "../models/Event/event.entity.js";

class TicketController {
    async index(req: Request, res: Response) {
        try {
            const tickets = await getRepository(Ticket).find({
                where: {
                    event_id: req.query.event_id
                }
            });
            return tickets ? res.json(tickets) : res.status(404).json({ message: "Tickets não encontrados!" });
        } catch (err) {
            return res.status(500).json({
                message: "Erro ao listar tickets",
                data: err
            });
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
                    throw new Error('Erro ao salvar tickets');
                }
            }else{
                throw new Error('Capacidade do evento atingida!');
            }

            return res.status(200).json({ message: "Tickets cadastrados com sucesso!" });
        } catch (err) {
            return res.status(500).json({
                message: "Erro ao salvar ticket",
                data: err
            });
        }
    }
}

export default new TicketController();