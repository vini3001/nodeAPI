import { Router } from "express";
import * as apiController from '../controllers/apiController'

const route = Router();

route.get('/ping', apiController.ping)
route.get('/frases/read', apiController.readPhrase)
route.post('/frases', apiController.createPhrase)
route.post('/frases/:id/filter', apiController.filterPhrases)
route.put('/frases/:id/update', apiController.updatePhrases)
route.delete('/frases/:id/remove', apiController.removePhrase)
export default route