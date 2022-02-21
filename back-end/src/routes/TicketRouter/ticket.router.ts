
import { Router } from "express";

import ticketController from "../../app/controllers/ticket.controller.js";

const router = new (Router as any)();

import authMiddleware from "../../app/middlewares/authentication/auth.middleware.js";

router.get("/", ticketController.index);
router.post("/", ticketController.store);
router.patch("/", ticketController.availability);
router.patch("/:id", ticketController.buy);

export default router;