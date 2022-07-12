const Packets = require("../models/packets");
const Parcel = require("../models/parcel");
const Payments = require("../models/payments");
const Feedback = require('../models/feedback');


// ---------- using 2 tables -----------------------

module.exports.orderhistory =(req,res,next) => {
Parcel.findAll({
    where: { pid:req.body.pid }
  }).then(parcel => {
    console.log(parcel);
})
  .catch(err=>{
    console.log(err); 
})

   
}


module.exports.trackid =(req,res,next) => {
    Parcel.findOne({
        where: { tracking_id:req.body.tracking_id }
      }).then(parcel => {
        console.log(parcel);
      }).catch(err=>{
        console.log(err);
    })
    
    
}    

// --------------Using 4 tables-----------------

module.exports.orderhistoryy =(req,res,next) => {
    Packets.findAll({
        where: { uid:req.body.uid }
      }).then(packet => {
        console.log(packet);
    })
      .catch(err=>{
        console.log(err); 
    })
    
       
    }
    
    
    module.exports.trackidd =(req,res,next) => {   
        Payments.findAll({
            where: { tracking_id:req.body.tracking_id }
          }).then(payments => {
            console.log(payments[0]);
            const paid = payments[0].paid;
            console.log(paid);
          return  Packets.findAll({where:{id:paid}})
          })
          .then(result =>{
            console.log(result);  
          }) 
          .catch(err=>{
            console.log(err);
        })
         
        
    }      