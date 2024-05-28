// services/cartService.js
const Cart = require('../models/cartModel');

let carts = [];

function createCart() {
    const id = carts.length > 0 ? Math.max(...carts.map(cart => cart.id)) + 1 : 1;
    const newCart = new Cart(id);
    carts.push(newCart);
    return newCart;
}

function getCartById(cartId) {
    return carts.find(cart => cart.id === cartId);
}

module.exports = { createCart, getCartById };
