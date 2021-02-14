import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@email.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true
	},
	{
		name: 'Shop Owner',
		email: 'shop@email.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Customer Buyer',
		email: 'customer@email.com',
		password: bcrypt.hashSync('123456', 10),
	}
]

export default users