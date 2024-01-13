// src/controllers/productController.js
const Product = require("../models/productModel");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchProducts = async (req, res) => {
  try {
    const query = req.query.query;
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Case-insensitive search for product name
        { description: { $regex: query, $options: "i" } }, // Case-insensitive search for description
        { "variants.name": { $regex: query, $options: "i" } }, // Case-insensitive search for variant name
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Other controller methods for update, delete, and retrieving individual products go here
