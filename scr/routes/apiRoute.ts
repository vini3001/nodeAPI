import { Router } from "express";
import multer, { diskStorage } from "multer";
import * as apiController from '../controllers/apiController';
import { UploadFile } from "../controllers/uploadController";

const upload = multer({
    dest: './tmp',
    fileFilter(req, file, cb) {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']
        if (allowed.includes(file.mimetype)) {
            console.log(file.mimetype)
            cb(null, true)
        } else {
            cb(null, false)
        }
    },
    limits: { fileSize: 10000000 }
})
const route = Router();

route.get('/ping', apiController.ping)
route.get('/frases/read', apiController.readPhrase)
route.post('/frases', apiController.createPhrase)
route.post('/frases/:id/filter', apiController.filterPhrases)
route.put('/frases/:id/update', apiController.updatePhrases)
route.delete('/frases/:id/remove', apiController.removePhrase)

route.post('/upload', upload.single('avatar'), UploadFile)
export default route