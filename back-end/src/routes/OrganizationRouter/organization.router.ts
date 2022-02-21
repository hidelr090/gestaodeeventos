import { Router } from "express";

import organizationController from "../../app/controllers/organization.controller.js";

const router = new (Router as any)();

import authMiddleware from "../../app/middlewares/authentication/auth.middleware.js";

router.get("/", organizationController.index);
router.post("/", authMiddleware, organizationController.store);
router.patch("/:id", authMiddleware, organizationController.update);

export default router;