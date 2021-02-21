import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Order = ({ order }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/orders/${order._id}`}>
        <Card.Text as='h3'>{order._id}</Card.Text>
      </Link>

      <Card.Body>
        <Link to={`/orders/${order._id}`}>
          <Card.Title as='div'>
            <strong>
              {order.orderItems.reduce((acc, item) => acc + item.qty, 0)} Items
            </strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>${order.totalPrice}</Card.Text>
        {order.isPaid ? (
          <Card.Text as='h4'>Paid on {order.paidAt}</Card.Text>
        ) : (
          <Link to={`orders/${order._id}/payment`}> Pay for Order</Link>
        )}
        {order.isDelivered && (
          <Card.Text as='h4'>Shipped on {order.deliveredAt}</Card.Text>
        )}
      </Card.Body>
    </Card>
  )
}
