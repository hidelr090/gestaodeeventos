import { Router } from "express";
import ticketController from "../../app/controllers/ticket.controller.js";
const router = new Router();
import authMiddleware from "../../app/middlewares/authentication/auth.middleware.js";
router.get("/", ticketController.index);
router.post("/", authMiddleware, ticketController.store);
export default router;
