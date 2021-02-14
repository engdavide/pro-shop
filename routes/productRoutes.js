import express from 'express'
const Router = express.Router()

import Product from '../models/Product.js'

const use = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

// @desc Fetch ALL products
// @route GET /api/products
// @access public
Router.get(
  '/',
  use(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @desc Fetch ONE products
// @route GET /api/products/:id
// @access public
Router.get(
  '/:id',
  use(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      console.log('product not found')
      res.status(404).send(`Product Not Found`)
      throw new Error('Product not Found')
    }
  })
)

export default Router
