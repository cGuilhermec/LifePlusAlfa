import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/routes';
import cors from 'cors';
import connectDB from '../db/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);

connectDB()
app.listen(PORT, () => {
console.log(`The server is running on port: http://localhost:${PORT}`);
});