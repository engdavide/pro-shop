import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import products from './products.js'
import connectDb from './config/connectDB.js'

dotenv.config()
connectDb()

const app = express()

app.get('/api/products', (req, res) => {
	res.json(products)
})

app.get('/api/products/:id', (req, res) => {
	const product = products.find(p => p._id === req.params.id)
	res.json(product)
})

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(PORT, console.log(`sever up on ${PORT} in ${MODE} mode pew pew`.yellow.bold))