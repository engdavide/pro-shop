import products from '../products'
import { Row, Col } from 'react-bootstrap'
import { Product } from '../components/lib'

export const HomeLayout = () => {
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
