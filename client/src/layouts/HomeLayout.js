import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/lib'
import { listProducts } from '../actions/productActions'


export const HomeLayout = () => {
	const dispatch = useDispatch()
	const productList = useSelector( state => state.productList)
	const { loading, err, products } = productList
	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])
	
	return(
		<>
			<h1>Products</h1>
			{loading ? (
			<h2> Loading... </h2>
				) : err ? (
				<h3>{err}</h3> 
				) : (
					<Row>
						{products.map( product => (
							<Col key={product._id} sm={12} md={6} lg={4}>
								<Product product={product} />
							</Col>
						))}
					</Row>
			)}
		</>
	)
}
