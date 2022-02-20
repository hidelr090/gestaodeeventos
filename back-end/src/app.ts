import express, {Express} from 'express';
import allowCors from './config/cors.js';
import router from './routes/index.js';
import swaggerUi from 'swagger-ui-express';
import './database/connection.js';

const app: Express = express();

app.use(express.json());
app.use(allowCors);
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerUi));
app.use('/ftp', express.static('data/uploads'));   

export default app;

