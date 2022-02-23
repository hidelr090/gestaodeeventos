import { Router } from "express";
import customerController from "../../app/controllers/customer.controller.js";
const router = new Router();
import authMiddleware from "../../app/middlewares/authentication/auth.middleware.js";
router.get("/", customerController.index);
router.post("/", customerController.store);
router.patch("/", authMiddleware, customerController.update);
export default router;
