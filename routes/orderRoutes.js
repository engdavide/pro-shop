import express from 'express'
import {
  addOrderItems,
  getOrderById,
  getAllOrders,
} from '../controllers/orderController.js'
const api = express.Router()

import { protect } from '../middleware/authMiddleware.js'

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

// Routes are /api/orders

api.post('/', protect, use(addOrderItems))
api.get('/', protect, use(getAllOrders))
api.get('/:id', protect, use(getOrderById))

export default api
