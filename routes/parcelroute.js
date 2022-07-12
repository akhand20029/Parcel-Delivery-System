const path = require('path');
//const { body } = require('express-validator');

const express = require('express');

const parcelController = require('../controller/parcelcontroller');
const parcelController_co = require('../controller/parcelcontroller_co');

//const User = require('../models/user');


const router = express.Router();

// parcel/ => POST
router.post('/postParcel', parcelController_co.postParcel);
router.post('/feedback', parcelController_co.postFeedback);
// parcel/ => GET
router.get('/getcheckout',parcelController.getcheckout);
router.get('/create-checkout-session',parcelController.checkout);
router.get('/checkoutsuccess',parcelController.getcheckoutsuccess);
router.get('/checkoutfail',parcelController.getcheckoutfail);   

// /admin/signout => GET  
router.get('/getParcel', parcelController.getParcel); 
 
module.exports = router;
    