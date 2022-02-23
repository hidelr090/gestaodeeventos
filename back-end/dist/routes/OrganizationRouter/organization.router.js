import { Router } from "express";
import organizationController from "../../app/controllers/organization.controller.js";
const router = new Router();
import authMiddleware from "../../app/middlewares/authentication/auth.middleware.js";
router.get("/", organizationController.index);
router.post("/", organizationController.store);
router.patch("/", authMiddleware, organizationController.update);
export default router;
