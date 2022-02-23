import { getRepository } from "typeorm";
import { Ticket } from "../models/Ticket/ticket.entity.js";
import { Event } from "../models/Event/event.entity.js";
import { badRequest, internalServerError, ok } from "../../utils/httpStatus.js";
class TicketController {
    async index(req, res) {
        try {
            const tickets = await getRepository(Ticket).find({
                where: {
                    event_id: req.query.event_id
                }
            });
            return tickets ? res.json(tickets) : badRequest(res, "Nenhum ticket encontrado!");
        }
        catch (err) {
            return internalServerError(res, "Erro ao buscar tickets!");
        }
    }
    async store(req, res) {
        const ticketRepository = getRepository(Ticket);
        try {
            const amount = req.query.amount || 1;
            const count = await ticketRepository.count({ where: { event: { id: req.query.event_id } } });
            const event = await getRepository(Event).findOne({ where: { id: req.query.event_id } });
            const total = count;
            const capacity = event === null || event === void 0 ? void 0 : event.capacity;
            let ticketList = [];
            for (let i = 0; i < amount; i++) {
                ticketList.push(Object.assign(Object.assign({}, req.body), { event: { id: req.query.event_id }, customer: { id: req.userId } }));
            }
            if (total + amount <= capacity) {
                try {
                    await ticketRepository.save(ticketList);
                }
                catch (_a) {
                    return badRequest(res, "Erro ao salvar tickets!");
                }
            }
            else {
                return badRequest(res, "Capacidade do evento excedida!");
            }
            return ok(res, "Tickets cadastrados com sucesso!");
        }
        catch (err) {
            return internalServerError(res, "Erro ao buscar tickets!");
        }
    }
}
export default new TicketController();
