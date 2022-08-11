import express, { Request, Response, ErrorRequestHandler } from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { request } from 'http';
import { error } from 'console';
import { MulterError } from 'multer';
import cors from 'cors'
import apiRoutes from './routes/apiRoute'

dotenv.config();

const server = express();

server.use(cors({}))

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true }))

server.use(apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Página não encontrada' })
})

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); //Bad Request
    if (err instanceof MulterError) {
        res.json({ error: err.code })
    } else {
        console.log(err)
        console.log({ error: 'ocorreu algum erro' })
    }
}
server.use(errorHandler)

server.listen(process.env.PORT)