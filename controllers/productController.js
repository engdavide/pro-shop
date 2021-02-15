import express from 'express'
import Product from '../models/Product.js'

// @desc Fetch ALL products
// @route GET /api/products
// @access public
const getProducts = async (req, res) => {
  const products = await Product.find({})
  res.json(products)
}

// @desc Fetch ONE products
// @route GET /api/products/:id
// @access public
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    console.log('product not found')
    res.status(404).send(`Product Not Found`)
    throw new Error('Product not Found')
  }
}

export { getProducts, getProductById }
