// src/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/products", productController.createProduct);
router.get("/products", productController.getProducts);
router.get("/products/search", productController.searchProducts);
// Add other routes for update, delete, and retrieving individual products

module.exports = router;
