const mongoose = require('mongoose');
const products = require('./products');

const Facture= mongoose.Schema({
  facturename : {
    type : Number,
    required : false
},
  clientname : {
      type : String,
      required : false,
  },
date: {
  type: Date,
  default: Date.now(),
},
 
total: {
  type : Number,
  required : false
},

totalPrice  : {
  type : Number,
  required : false
},
charge:{
  type : Number,
  required : false  
},
chargeEmployer:{
  type : Number,
  required : false
},
totCharge:{
  type : Number,
  required : false 
},


inputFields: [
  {
    id:{
      type:String,
      required:false
    },
   
    name: {
      type : String,
      required : false 
    },
    unitPrice:{
      type : Number,
      required : false 
    },
    Qts: {
      type : Number,
      required : false 
    },
    price:{
      type : Number,
      required : false 
    },
  }
],
})
module.exports = mongoose.model('facture',Facture)