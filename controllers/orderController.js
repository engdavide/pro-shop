import express from 'express'
import Order from '../models/Order.js'

// @desc Create new order
// @route POST /api/orders
// @access Private
export const addOrderItems = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No items in order')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })
    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  }
}

// @desc Get existing order Details
// @route GET /api/orders/:id
// @access Private
export const getOrderById = async (req, res) => {
  const foundOrder = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )
  if (foundOrder) {
    res.json(foundOrder)
  } else {
    res.status(404)
    throw new Error('order not found')
  }
}

// @desc Get existing order Index
// @route GET /api/orders
// @access Private
export const getAllOrders = async (req, res) => {
  const foundOrders = await Order.find({})
  res.json(foundOrders)
}
