// TODO: require module from npm
const express = require('express');
const router = express.Router();

const {renderProductsPage, addToCart, renderCartPage} = require("../controllers/products.controller");

router.get('/', renderProductsPage);
router.get('/add-to-cart/:productId', addToCart);
router.get('/cart', renderCartPage);

module.exports = router;