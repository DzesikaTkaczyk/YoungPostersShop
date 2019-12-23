const express = require('express');
const router = express.Router();

const CartController = require('../controllers/cart.controller');

// get all products
router.route('/cart').get(CartController.getCart);
router.route("/:id").post(CartController.addToCart);

module.exports = router;