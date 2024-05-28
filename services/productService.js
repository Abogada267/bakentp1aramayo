// services/productService.js
const Product = require('../models/productModel');

let products = [];

function addProduct(title, description, price, stock) {
    const id = products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
    const newProduct = new Product(id, title, description, price, stock);
    products.push(newProduct);
    return newProduct;
}

function getAllProducts() {
    return products;
}

module.exports = { addProduct, getAllProducts };
