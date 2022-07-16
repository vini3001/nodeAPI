import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { request } from 'http';
import { error } from 'console';
import cors from 'cors'
import apiRoutes from './routes/apiRoute'

dotenv.config();

const server = express();

server.use(cors({
    origin: "http://resttesttest.com",
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE']
}))

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended: true}))

server.use(apiRoutes)

server.use((req: Request, res:Response) => {
        res.status(404);
        res.json({error:'Página não encontrada'})
})

server.listen(process.env.PORT)