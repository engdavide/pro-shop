import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './users.js'
import products from './products.js'

import User from '../models/User.js'
import Order from '../models/Order.js'
import Product from '../models/Product.js'

import connectDb from '../config/connectDB.js'

dotenv.config()

connectDb()

	

const importData = async () => {
	try {
		await Order.deleteMany()
		await User.deleteMany()
		await Product.deleteMany()
		
		const createdUsers = await User.insertMany(users)
		const adminUser = createdUsers[0]._id
		const sampleProducts = products.map(item => {
			return {...item, user: adminUser}
		})
		
		await Product.insertMany(sampleProducts)
		
		console.log('Data Seeded OK')
	} catch (err){
		console.error(`error: ${err}`)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		await Order.deleteMany()
		await User.deleteMany()
		await Product.deleteMany()
		console.log('Data Destroyed')
	} catch (err){
		console.error(`error: ${err}`)
		process.exit(1)
	}
}

	
	if(process.argv[2] === '-d') {
		destroyData()
	} else {
		importData()
	}
