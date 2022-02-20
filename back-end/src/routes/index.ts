import { Router, Response, Request} from "express";

const router = new (Router as any)();

import customer from './customer.router.js';
router.use('/customer', customer);

export default router;