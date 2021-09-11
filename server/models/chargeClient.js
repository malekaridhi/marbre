const mongoose = require('mongoose');

const ChargeClients= mongoose.Schema({
name : {
    type : String,
    required : true
},
price : {
  type : Number,
  required : true
},
bankAccountName: {
  type : String,
  required : true
},
employerName : {
  type : String,
  required : true
},
   
})
module.exports = mongoose.model('chargeClients',ChargeClients)