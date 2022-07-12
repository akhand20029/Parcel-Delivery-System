const accountSid = 'AC4e4a15cf799c1346aeeee72850d5abeb';
const authToken = '31321b7f369369c21ce1e3d05f9f18e9';
const client = require('twilio')(accountSid, authToken);

module.exports.sendOtp = (req,res,next) => {
    client.messages
    .create({
     body: ' Verify If its you',
     from: '+19034',
     to: ''
   })
  .then(message => console.log(message.sid));
};