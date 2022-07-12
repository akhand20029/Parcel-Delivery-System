const path = require('path');
//const { body } = require('express-validator');

const express = require('express');

const orderHistoryController = require('../controller/orderHistorycontroller');
//const User = require('../models/user');


const router = express.Router(); 

// orderhistory/ => POST 
router.post('/details', orderHistoryController.orderhistoryy);
router.post('/trackid', orderHistoryController.trackidd);


module.exports = router;