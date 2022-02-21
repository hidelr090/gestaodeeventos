import { getRepository, Like } from "typeorm";
import { Ticket } from "../models/Ticket/ticket.entity.js";
import { Request, Response } from "express";
import { Customer } from "../models/Customer/customer.entity.js";

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
            
            let ticketList = [];
            for(let i = 0; i < amount; i++){
                ticketList.push({ ...req.body, event_id: req.query.event_id});
            }
            try{
                await ticketRepository.save(ticketList);
            }catch{
                throw new Error('Algo deu errado ao salvar ticket');
            }
            return res.status(200).json({ message: "Tickets cadastrados com sucesso!" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({
                message: "Erro ao salvar ticket",
                data: err
            });
        }
    }
    
    async availability(req: Request, res: Response) {
        const ticketRepository = getRepository(Ticket);
        try {
            const tickets = await ticketRepository.count({
                where: {
                    event_id: req.query.event_id,
                    availability: true
                }
            });
            return res.json({availability: tickets});
        } catch (err) {
            return res.status(500).json({
                message: "Erro ao buscar ticket",
                data: err
            });
        }
    }

    async buy(req: Request, res: Response) {
        const ticketRepository = getRepository(Ticket);
        try {
            const amount  = req.query.amount || 1;
            const count = await ticketRepository.count({where:{event_id:req.query.event_id, availability:true}}); 
            
            if(!await getRepository(Customer).findOne({where:{id:req.userId}})){
                throw new Error('Cliente nao encontrado');
            }

            if(count < amount || !count){
                return res.status(400).json({ message: "Não há tickets disponíveis o suficiente!" });
            }

            for(let i = 0; i < amount; i++){
                const ticket = await ticketRepository.findOne({
                    where: {
                        event_id: req.query.event_id,
                        availability: true
                    }
                });
                if(ticket){
                    ticket.availability = false;
                    await ticketRepository.save(ticket);
                }
            }
            return res.status(200).json({ message: "Tickets comprados com sucesso!" });
        }catch(err){
            return res.status(500).json({
                message: "Erro ao comprar ticket",
                data: err
            });
        }
    }
}

export default new TicketController();