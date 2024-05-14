import express from "express";
import { handleLogin, handleLogout, handleSignup } from "../Controllers/auth.controller.js";

const router = express.Router();

router.post('/signup', handleSignup)
router.post('/login', handleLogin)
router.post('/logout', handleLogout)

export default router