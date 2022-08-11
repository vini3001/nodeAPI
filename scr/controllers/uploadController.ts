import { Response, Request } from "express"
import sharp, { fit } from 'sharp'
import { unlink } from 'fs/promises'

export async function UploadFile(req: Request, res: Response) {
    if (req.file) {
        const filename = `${req.file.filename}.jpg`
        await sharp(req.file.path)
            .resize(500, 300, {
                fit: fit.cover
            })
            .toFormat('jpeg')
            .toFile(`./public/media/${req.file.filename}.jpg`)
        await unlink(req.file.path)

        res.json({ image: `${req.file.filename}.jpg` })
    } else {
        res.status(400)
        res.json({ error: 'arquivo inválido!' })
    }
} 