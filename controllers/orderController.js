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

// @desc Get existing order
// @route GET /api/orders/:id
// @access Private
export const getOrderDetails = async (req, res) => {
  const foundOrder = await Order.findById(req.params.id)
  res.json(foundOrder)
}

// @desc Get existing order
// @route GET /api/orders
// @access Private
export const getAllOrders = async (req, res) => {
  const foundOrders = await Order.find({})
  res.json(foundOrders)
}
