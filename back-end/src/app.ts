import express, {Express} from 'express';
import path from 'path';
import allowCors from './config/cors';
import router from './routes/index';

class App{
    
    public server: Express;

    constructor () {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares () {
        this.server.use(express.json());
        this.server.use(allowCors);
        this.server.use(express.static(path.resolve(__dirname, '..', 'public')));
    }

    routes () {
        this.server.use(router);
    }
}

export default new App().server;


