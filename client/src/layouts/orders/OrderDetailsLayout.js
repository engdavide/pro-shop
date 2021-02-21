import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Message, Loader } from '../../components/lib'
import { getOrderById } from '../../actions/orderActions'

export const OrderDetailsLayout = ({ match }) => {
  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { loading, error, order } = orderDetails

  useEffect(() => {
    if (!error && !order) {
      dispatch(getOrderById(match.params.id))
    }
  }, [dispatch, error, order, match])

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : order ? (
        <Card>
          <Card.Text>Price: {order.totalPrice}</Card.Text>
        </Card>
      ) : (
        ''
      )}
    </div>
  )
}
