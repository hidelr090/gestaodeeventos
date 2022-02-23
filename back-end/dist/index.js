import 'dotenv/config';
import app from './app.js';
<<<<<<< HEAD
const HOST = process.env.HOST || 'localhost';
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, HOST, () => {
=======
app.listen(process.env.PORT || 8080, () => {
>>>>>>> 93780f5c858f3a0c4cbfff4e75328b346c99966d
    console.log(`Server started on port ${process.env.PORT || 8080}!`);
});
