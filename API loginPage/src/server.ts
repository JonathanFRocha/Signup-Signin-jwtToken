import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './db/connection'

const port = 3333
const app = express();

app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`servidor rodando na porta ${port}`))