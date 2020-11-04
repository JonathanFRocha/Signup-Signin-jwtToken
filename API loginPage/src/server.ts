import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import cors from 'cors'
import './db/connection'

const port = 3333
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`servidor rodando na porta número ${port}`))