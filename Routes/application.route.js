import express from "express"
import { protectRoute } from "../Middleware/protect.js"
import { getAllApps, postApplication } from "../Controllers/application.controller.js"

const router = express.Router()

router.get('/all-apps' , protectRoute , getAllApps)
router.post('/post-app' ,protectRoute , postApplication )

export default router