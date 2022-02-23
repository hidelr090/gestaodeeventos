import 'dotenv/config';
import app from './app.js';
const HOST = process.env.HOST || 'localhost';
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, HOST, () => {
    console.log(`Server started on port ${process.env.PORT || 8080}!`);
});
