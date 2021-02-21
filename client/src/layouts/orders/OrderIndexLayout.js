import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Message, Loader, Order } from '../../components/lib'
import { getAllOrders } from '../../actions/orderActions'

export const OrderIndexLayout = () => {
  const dispatch = useDispatch()

  const orderIndex = useSelector((state) => state.orderIndex)
  const { loading, error, orders } = orderIndex

  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])

  return (
    <div>
      order index here
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : orders ? (
        <Row>
          {orders.map((order) => (
            <Col key={order._id} sm={12} md={6} lg={4}>
              <Order order={order} />
            </Col>
          ))}
        </Row>
      ) : (
        ''
      )}
    </div>
  )
}
