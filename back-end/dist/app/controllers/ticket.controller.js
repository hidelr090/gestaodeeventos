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
            const count = await ticketRepository.count({ where: { event: { id: req.query.event_id } } });
            const event = await getRepository(Event).findOne({ where: { id: req.query.event_id } });
            const total = count;
            const capacity = event === null || event === void 0 ? void 0 : event.capacity;
            if (total + 1 <= capacity) {
                try {
                    await ticketRepository.save(Object.assign(Object.assign({}, req.body), { event: { id: req.query.event_id }, customer: { id: req.userId } }));
                }
                catch (_a) {
                    return badRequest(res, "Erro ao salvar ticket!");
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
