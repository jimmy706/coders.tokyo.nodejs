// TODO: require module from npm
const express = require('express');
const router = express.Router();


// TODO: require module from my project
const controller = require('../controllers/auth.controller');

router.get('/login', controller.login);
router.post('/login', controller.postLogin);



module.exports = router;
