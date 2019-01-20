// TODO: require module from npm
const express = require('express');
const router = express.Router();


// TODO: require module from my project
const {index, searchUser, createUser, renderViewUser, renderCreateUser} = require('../controllers/user.controller');
const validate = require('../validates/createUser.validate');


router.get('/', index);

//TODO: handle GET request for search user
router.get('/search', searchUser);

//TODO: create page for create-user-page
router.get('/create', renderCreateUser);

//TODO: handle POST request for create user
router.post('/create', validate.createUser , createUser);

router.get('/:userId', renderViewUser);


module.exports = router;