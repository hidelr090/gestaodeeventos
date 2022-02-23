import { getRepository } from "typeorm";
import { Customer } from "../models/Customer/customer.entity.js";
import { internalServerError, badRequest, ok } from "../../utils/httpStatus.js";
class CustomerController {
    async index(req, res) {
        try {
            const customers = await getRepository(Customer).find({
                select: ["id", "name"],
            });
            return customers ? res.json(customers) : badRequest(res, 'Nenhum cliente encontrado!');
        }
        catch (err) {
            return internalServerError(res, 'Erro ao buscar clientes!');
        }
    }
    async store(req, res) {
        const customerRepository = getRepository(Customer);
        try {
            let customer = null;
            const found = await customerRepository.find({ where: [{ email: req.body.email }, { cpf: req.body.cpf }] });
            if (found.length === 0) {
                customer = await customerRepository.save(req.body);
            }
            return customer ? ok(res, 'Cliente cadastrado com sucesso!') : badRequest(res, 'Cliente já cadastrado!');
        }
        catch (err) {
            return internalServerError(res, 'Erro ao cadastrar cliente!');
        }
    }
    async update(req, res) {
        const customerRepository = getRepository(Customer);
        try {
            const customer = await customerRepository.findOne({ id: req.userId });
            if (customer) {
                await customerRepository.update({ id: req.userId }, req.body);
                return ok(res, 'Cliente atualizado com sucesso!');
            }
            else {
                throw new Error('Ocorreu algum problema!');
            }
        }
        catch (err) {
            return internalServerError(res, 'Erro ao atualizar cliente!');
        }
    }
}
export default new CustomerController();
