const send_sms = require('../util/send-sms');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');
const User = require("../models/users");
const jwt = require('jsonwebtoken');
const accountSid = 'AC4e4a15cf799c1346aeeee72850d5abeb';
const authToken = '31321b7f369369c21ce1e3d05f9f18e9';
const client = require('twilio')(accountSid, authToken);


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
 const phone = req.body.phone;
 const country = req.body.country;
 const state = req.body.state;
 const city = req.body.city;
 const zipcode = req.body.zipcode;
console.log(name);

// -------------OTP verification------------------------------
let otp = Math.floor(Math.random()*90000) + 10000;

client.messages
    .create({
     body:  `Verify If its you
     Enter the otp ${otp}`,
     from: '+1903403',
     to: ''
   //  to: req.phone
   })
  .then(message =>{ 
    console.log(message);
    // return res.json({otp:otp});
  
  })
  .catch(err=>{
console.log(err);
  });

//---------------------------------------------



bcrypt.hash(password,12)
.then(hashedPassword => {
  User.create({
    name:name,
    email : email,
    password : hashedPassword,
    phone : phone,
    country: country,
    state:state,
    city : city,
    zipcode: zipcode
  })
}) 
.then(result =>{
  console.log('User created');
}) 
.catch(err => {
  console.log(err);
})

}

exports.postSignIn = (req, res, next) => {
 const email = req.body.email;
 const password = req.body.password;
 let loadedUser;
console.log("SignIn");
User.findOne({
  where: { email:email },
})
.then(user => {
  if (!user) {
    const error = new Error('A user with this email could not be found.');
    error.statusCode = 401;
    throw error;
  }
  loadedUser = user;
  bcrypt.compare(password,user.password)
  .then(doMatch =>{
        if(doMatch) {
          console.log(" User logged in");
          const token = jwt.sign({
              email: loadedUser.email,
              userId: loadedUser.id.toString()
          },'secret',{expiresIn:'1h'})
          res.json({token:token,userId:loadedUser.id.toString()});

         } else { 
          console.log(" Password not matched");
         } 
         
  })
  .catch(err =>{
    console.log(err);
  });
console.log(user);
}) 
.catch(err =>{
  console.log(err);
});

};

exports.getSignOut = (req, res, next) => {
 
  console.log("SignOut");
  
  }; 


  