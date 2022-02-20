import { Router } from "express";

import customerController from "../app/controllers/customer.controller.js";

const router = new (Router as any)();

router.get("/", customerController.index);
router.post("/", customerController.store);

export default router;
