import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDb from './config/connectDB.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDb()

const app = express()

//Routing
app.use('/api/products', productRoutes)

//404 error
app.use(notFound)
//Other error handling
app.use(errorHandler)


const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(PORT, console.log(`sever up on ${PORT} in ${MODE} mode pew pew`.yellow.bold))