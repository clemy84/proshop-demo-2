import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct); // Fetch all products
router.route('/:id').get(getProductById).put(protect, admin, updateProduct); // Fetch a product by ID

export default router;
