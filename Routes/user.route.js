import express from 'express'
import { protectRoute } from '../Middleware/protect.js'
import { getProfileData, updateProfile } from '../Controllers/user.controller.js'

const router = express.Router()

router.get('/' , protectRoute , getProfileData)
router.patch('/update-profile' ,protectRoute , updateProfile)

export default router