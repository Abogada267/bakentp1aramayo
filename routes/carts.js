// routes/carts.js
const express = require('express');
const router = express.Router();
const cartService = require('../services/cartService');

router.post('/', (req, res) => {
    const newCart = cartService.createCart();
    res.status(201).json(newCart);
});

router.get('/:cartId', (req, res) => {
    const cartId = parseInt(req.params.cartId);
    const cart = cartService.getCartById(cartId);
    if (!cart) {
        return res.status(404).send('Cart not found');
    }
    res.json(cart);
});

module.exports = router;
