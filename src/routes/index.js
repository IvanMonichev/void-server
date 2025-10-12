import { Router } from 'express'
import { getHash } from '../controllers/root.js'
import { getHour } from '../controllers/hour.js'
import { getLogin } from '../controllers/login.js'
import { getSample } from '../controllers/sample.js'

const router = Router()

router.get('/', getHash)
router.get('/hour', getHour)
router.get('/login', getLogin)
router.get('/sample', getSample)

export default router
