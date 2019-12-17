const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get all products
router.route('/').get(ProductController.getProducts);
router.route("/:id").get(ProductController.getSingleProduct);
router.route('/range/:startAt/:limit').get(ProductController.getProductsByRange);
router.route('/cart').get(ProductController.getProducts)

module.exports = router;