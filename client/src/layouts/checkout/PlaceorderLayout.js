import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Message, CheckoutSteps } from '../../components/lib'
import { createOrder } from '../../actions/orderActions'

export const PlaceorderLayout = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  const placeorderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])

  //Prices:
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 10)

  cart.taxPrice = addDecimals(Number((cart.itemsPrice * 0.15).toFixed(2)))

  cart.totalPrice = addDecimals(
    Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
  )

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>
                  Address:
                  {cart.shippingAddress.address}, {cart.shippingAddress.city},
                  {cart.shippingAddress.stateProvince},
                  {cart.shippingAddress.postalCode}
                </strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method:</h2>
              <strong>{cart.paymentMethod}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Items:</h2>
              {cart.cartItems.length === 0 ? (
                <Message>There's nothing here!</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} @ ${item.price} = {item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items:</Col>
                  <Col>{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax:</Col>
                  <Col>{cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>
                    <strong>{cart.totalPrice}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <ListGroup.Item>
                  {error && <Message variant='danger'>{error}</Message>}
                </ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeorderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}
