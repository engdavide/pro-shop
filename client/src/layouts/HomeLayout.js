import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/lib'

//Will be redux later...
import axios from 'axios'



export const HomeLayout = () => {
	
	//Will be redux later...
	const [products, setProducts] = useState([])
	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products')
			setProducts(data)
		}
		fetchProducts()
	}, [])
	
	return(
		<>
			<h1>Products</h1>
			<Row>
				{products.map( product => (
				 	<Col key={product._id} sm={12} md={6} lg={4}>
				 		<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}
