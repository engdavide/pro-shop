import express from 'express'
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'
const api = express.Router()

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

// Routes are /api/products

api.get('/', use(getProducts))
api.get('/:id', use(getProductById))

export default api
