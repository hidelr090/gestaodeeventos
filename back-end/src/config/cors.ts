import { Request, Response} from "express";

export default function (req: Request, res: Response, next: any) : void { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Methos', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept');
    next();
}
