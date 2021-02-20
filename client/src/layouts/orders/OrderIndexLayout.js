import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message, Loader } from '../../components/lib'
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
        <Message variant='info'>orders here</Message>
      ) : (
        ''
      )}
    </div>
  )
}
