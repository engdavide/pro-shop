import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const api = express.Router()

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

// Routes are /api/users

api.post('/login', use(authUser))
api.post('/', use(registerUser))
api.get('/profile', protect, use(getUserProfile))

export default api
