// TODO: require module from npm
const express = require('express');
const router = express.Router();

const {renderTransferPage, postTransferMoney} = require('../controllers/transfer.cotroller');

router.get('/', renderTransferPage);
router.post('/', postTransferMoney);

module.exports = router;