const path = require('path');
const { body } = require('express-validator');

const express = require('express');

const authController = require('../controller/authcontroller');

//const User = require('../models/user');


const router = express.Router();

// /admin/signup => PUT
router.put('/signup',[
    body('name').trim().isLength({min:2}).not().isEmpty(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({min:5})
],authController.putSignUp);

// /admin/signin => POST
router.post('/signin', authController.postSignIn);

// /admin/signout => GET  
router.get('/signout', authController.getSignOut);

module.exports = router;
