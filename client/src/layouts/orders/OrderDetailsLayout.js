import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup, Col, Row, Image } from 'react-bootstrap'
import { Message, Loader } from '../../components/lib'
import { getOrderById } from '../../actions/orderActions'

export const OrderDetailsLayout = ({ match }) => {
  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  //Always run once on load
  useEffect(() => {
    dispatch(getOrderById(match.params.id))
  }, [])

  //check if change to dependency, etc
  useEffect(() => {
    if (!order && !error) {
      dispatch(getOrderById(match.params.id))
    }
  }, [dispatch, match, error, order])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : order ? (
        <ListGroup variant='flush'>
          <ListGroup.Item>
            Address: {order.shippingAddress.address},{' '}
            {order.shippingAddress.city},{order.shippingAddress.stateProvince},{' '}
            {order.shippingAddress.postalCode}
          </ListGroup.Item>
          {order.orderItems &&
            order.orderItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>Qty: {item.qty}</Col>
                </Row>
              </ListGroup.Item>
            ))}
        </ListGroup>
      ) : (
        ''
      )}
    </div>
  )
}
