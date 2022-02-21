import { Router } from "express";

import customerController from "../../app/controllers/customer.controller.js";

const router = new (Router as any)();

import authMiddleware from "../../app/middlewares/authentication/auth.middleware.js";

router.get("/", customerController.index);
router.post("/", authMiddleware, customerController.store);
router.patch("/:id", authMiddleware, customerController.update);

export default router;
