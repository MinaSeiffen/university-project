import express from 'express'
import { contactRequest } from '../Controllers/contacting.controller.js';

const router = express.Router();

router.post('/request' , contactRequest)

export default router