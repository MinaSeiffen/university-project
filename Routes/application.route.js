import express from "express"
import { protectRoute } from "../Middleware/protect.js"
import { postApplication } from "../Controllers/application.controller.js"

const router = express.Router()

router.post('/post-app' ,protectRoute , postApplication )

export default router