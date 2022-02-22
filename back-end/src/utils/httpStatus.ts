import  {Response} from 'express';

export const badRequest = (res: Response, message: string) => {
    return res.status(400).json({message: message});
}

export const unauthorized = (res: Response, message: string) => {
    return res.status(401).json({message: message});
}

export const notFound = (res: Response, message: string) => {
    return res.status(404).json({message: message});
}

export const conflict = (res: Response, message: string) => {
    return res.status(409).json({message: message});
}

export const internalServerError = (res: Response, message: string) => {
    return res.status(500).json({message: message});
}

export const ok = (res: Response, message: string) => {
    return res.status(200).json({message: message});
}
