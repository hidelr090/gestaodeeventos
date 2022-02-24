import { Router } from "express";
import eventController from "../../app/controllers/event.controller.js";
const router = new Router();
import authMiddleware from "../../app/middlewares/authentication/auth.middleware.js";
router.post("/", authMiddleware, eventController.store);
router.get('/', eventController.find);
router.patch('/:id', authMiddleware, eventController.update);
export default router;
