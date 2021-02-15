import express from 'express'
import { authUser } from '../controllers/userController.js'
const api = express.Router()

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

// Routes are /api/products

api.post('/login', use(authUser))

export default api
