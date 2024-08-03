import express from 'express'
import { login,logout,signUp, verifyOtp} from '../controller/authController.js'

const router = express.Router()

router.post('/login',login)
router.post('/signup',signUp)
router.post('/verify-otp',verifyOtp)
// router.get('/logout',logout)


export default router