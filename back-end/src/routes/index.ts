import { Router, Response, Request} from "express";

const router = new (Router as any)();

router.get('/', (req: Request, res: Response) : object => {
   return res.json({success:true, message: 'Hello World'});
});

export default router;