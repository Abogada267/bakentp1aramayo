// routes/products.js
const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

router.post('/', (req, res) => {
    const { title, description, price, stock } = req.body;
    const newProduct = productService.addProduct(title, description, price, stock);
    res.status(201).json(newProduct);
});

router.get('/', (req, res) => {
    const products = productService.getAllProducts();
    res.json(products);
});

module.exports = router;


