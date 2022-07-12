// This is your test secret API key.
const stripe = require('stripe')('sk_test_51LJCVcSDJ01pJbyy3rAyl8YZLl1ae0pkzNrLviIITsZ3qA9tkEFoXnbQN7nAHgbAmZegLDvvecrGCQtfVDxy2k7k00DRD0MoLq');
//const express = require('express');
//const app = express();
//app.use(express.static('public'));
//const clientSecret = "pk_test_51LJCVcSDJ01pJbyyzKanwixvtCJi3BI0EOZRv2CzmvnUJmkMJDcEeE2blPdF5xY46jm4TTTOductt6mJR8hBiI3O00laQ3Nv61";

const Parcel = require('../models/parcel');
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const YOUR_DOMAIN = `http://localhost:8080`;



exports.postParcel = (req,res,next) =>{
    console.log("post a parcel");
    const uid = req.body.uid;
    const type = req.body.type;
    const weight = req.body.weight;
    const length = req.body.length; 
    const breadth = req.body.breadth;
    const pickup = req.body.pickup;
    const drop = req.body.drop;
    const alternate_phone = req.body.alternate_phone;
    const coupon = req.body.coupon;
    const cost_estimation= 1000;
    const tracking_id = 123;

Parcel.create({
    //uid:uid,
    type: type,
    weight:weight,
    length:length,
    breadth: breadth,
    pickup:pickup, 
    drop:drop,
    alternate_phone: alternate_phone,
  //  coupon:coupon,
  //  cost_estimation:cost_estimation,
  //  tracking_id: tracking_id,
    
  })
.then(result =>{
  console.log('User created');
}) 
.catch(err => {
  console.log(err); 
})

res.json({cost_estimation:cost_estimation,
    type : req.body.type,
    weight : req.body.weight,
    length : req.body.length,
    breadth : req.body.breadth,
    pickup : req.body.pickup,
    drop : req.body.drop,
    alternate_phone : req.body.alternate_phone,
});

} 

exports.getcheckout = (req,res,next) =>{ 
res.sendFile("C:\\Users\\user\\Desktop\\Parcel\\util\\checkout.html");
}
   
exports.checkout = async (req, res) => { 
        
        const session = await stripe.checkout.sessions.create({
        
          line_items: [ 
            {
              // Provide the amount of the parcel 
              amount: 20,
              quantity: 1, 
            "currency": "usd",
            "name": "parcel"
             },
          ],
          mode: 'payment',
          //success_url: `${YOUR_DOMAIN}/success.html`,
          //cancel_url: `${YOUR_DOMAIN}/cancel.html`,
          success_url: `${YOUR_DOMAIN}/parcel/checkoutsuccess`,
        cancel_url: `${YOUR_DOMAIN}/parcel/checkoutfail`
        })
       res.redirect(303, session.url);

  
           
      }   
      
exports.getcheckoutsuccess = (req,res,next) =>{
   let tracking_id = Math.floor(Math.random()*90000) + 10000;

    res.json({"message":"Transaction successful",
              "tracking_id" : tracking_id});


}   
   
exports.getcheckoutfail = (req,res,next) =>{
    res.json({"message":"Transaction Failed"});


}   
    
exports.getParcel = (req,res,next) =>{
    console.log("get a parcel"); 
 
 
}  
