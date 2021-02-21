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
            <strong>words</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>${order.totalPrice}</Card.Text>
      </Card.Body>
    </Card>
  )
}
