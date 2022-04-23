import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
