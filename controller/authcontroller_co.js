/*
const send_sms = require('../util/send-sms');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');
const User = require("../models/users");
const jwt = require('jsonwebtoken');


exports.putSignUp = (req, res, next) => {
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
  console.log("validation failed");
  return res.json({
    message:"validattion failed"
  });
 }

const name = req.body.name;
 const email = req.body.email;
 const password = req.body.password;
 //const phone = req.body.phone;

console.log(name);

// -------------SMS------------------------------
let otp = Math.floor(Math.random()*90000) + 10000;

client.messages
    .create({
     body:  `Verify If its you
     Enter the otp ${otp}`,
     from: '+190340',
     to: ''
   //  to: req.phone
   })
  .then(message =>{ 
    console.log(message);
     return res.json({
      name:name,
      email:email,
      password:password,
      phone:phone,
      serverotp:otp});
  //  next();
  
  })
  .catch(err=>{
console.log(err);
  });
}
//---------------------------------------------
exports.otpverification = (req,res,next) =>{
        const clientotp = req.otp;
        const serverotp = req.serverotp;
        if(clientotp === serverotp) {
          bcrypt.hash(req.password,12)
        .then(hashedPasword => {
              User.create({
             name: req.name,
            email:req.email,
            password:hashedPasword
            
  })
})
.then(result =>{
  console.log('User created');
})
.catch(err => {
  console.log(err);
})
        }
        else {
          console.log(" wrong otp entered !!");
        }

}


*/



 