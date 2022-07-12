// This is your test secret API key.
const stripe = require('stripe')('sk_test_51LJCVcSDJ01pJbyy3rAyl8YZLl1ae0pkzNrLviIITsZ3qA9tkEFoXnbQN7nAHgbAmZegLDvvecrGCQtfVDxy2k7k00DRD0MoLq');
const express = require('express');
const app = express();
//app.use(express.static('public'));
//const clientSecret = "pk_test_51LJCVcSDJ01pJbyyzKanwixvtCJi3BI0EOZRv2CzmvnUJmkMJDcEeE2blPdF5xY46jm4TTTOductt6mJR8hBiI3O00laQ3Nv61";


const YOUR_DOMAIN = 'http://localhost:4242';

const User = require('../models/users');
const Packets = require('../models/packets');
const Payments = require('../models/payments');
const Feedback = require('../models/feedback');

const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const { Result } = require('express-validator');
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
    const discount_cost = 800;
    const tracking_id = 123;

 User.findOne({
  where :{id:1}
 }).then( user => { 
  return  Packets.create({  
  uid: user.id,
  type: type,
  weight:weight, 
  length:length, 
  breadth: breadth,   
  pickup:pickup, 
  drop:drop,
  alternate_phone: alternate_phone,
  //coupon:coupon,
  //cost_estimation:cost_estimation,
  //tracking_id: tracking_id,
  
}) 
})
 .then(packet =>{ 
    console.log(packet.id);  
    return Payments.create({
      coupon:coupon,
      cost_estimation:cost_estimation,
      discount_cost:discount_cost,
      tracking_id: tracking_id, 
    paid:packet.id}) 
  })
  .then( payment => {
    console.log("Payment done");
    console.log(payment);
  }
  )     
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

    return stripe.customers.create({  
   //   source: stripeToken,
      name: 'Deepak',
 
      address: { 
          line1: 'TC 9/4 Old MES colony',   
          postal_code: '110092', 
          city: 'New Delhi', 
          state: 'Delhi', 
          country: 'India', 
      } 
  }) 
  .then((customer) => { 

     return  stripe.charges.create({ 
        line_items: [
          {
            // Provide the amount of the parcel
            amount: 20 * 100, 
            quantity: 1,
          
       
          "currency": "usd",
          "name": "parcel",
//source: req.body.stripeToken,
          customer: customer.id
           },
           
        ],
        mode: 'payment',
        //success_url: `${YOUR_DOMAIN}/success.html`,
        //cancel_url: `${YOUR_DOMAIN}/cancel.html`,
      //  success_url: `${req.protocol}://${req.get("host")}/checkout/success`,
      //cancel_url: `${req.protocol}://${req.get("host")}/checkout/cancel`
      }); 
  }) 
  .then(charge => { 
console.log(charge);
      res.json(charge); // If no error occurs 
  }) 
  .catch((err) => { 
      res.send(err)    // If some error occurs 
  }); 

}

exports.postFeedback = (req,res,next) =>{
    console.log("Post a feedback");

    const uid = req.body.uid;
    const pid = req.body.pid;
    const comments = req.body.comments;
    const suggestions = req.body.suggestions;
    const rating = req.body.rating;

    Feedback.create({
      
      uid:uid,
      pid:pid,
      comments:comments,
      suggestions:suggestions,
      rating:rating
    
    })
  }
 

   