import { Router } from "express";
import authController from "../../app/controllers/auth.controller.js";
const router = Router();
router.post('/customer', authController.authCustomer);
router.post('/organization', authController.authOrganization);
export default router;
