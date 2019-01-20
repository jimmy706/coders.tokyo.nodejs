// TODO: require module from npm
const express = require('express');
const router = express.Router();

const {renderProductsPage} = require("../controllers/products.controller");

router.get('/', renderProductsPage)

module.exports = router;