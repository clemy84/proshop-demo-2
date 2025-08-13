import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc create a new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('Add order items');
});

// @desc get Logged in user orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send('Get my orders');
});

// @desc get order by ID
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send('Get order by ID');
});

// @desc update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('Update order to paid');
});

// @desc update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('Update order to delivered');
});

// @desc get all orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send('Get all orders');
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
