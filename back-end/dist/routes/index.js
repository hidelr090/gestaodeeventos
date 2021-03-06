import { Router } from "express";
const router = new Router();
import auth from './AuthRouter/auth.router.js';
router.use('/auth', auth);
import customer from './CustomerRouter/customer.router.js';
router.use('/customer', customer);
import organization from './OrganizationRouter/organization.router.js';
router.use('/organization', organization);
import event from './EventRouter/event.router.js';
router.use('/event', event);
import ticket from './TicketRouter/ticket.router.js';
router.use('/ticket', ticket);
export default router;
