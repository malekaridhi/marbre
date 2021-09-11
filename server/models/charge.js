const mongoose = require('mongoose');

const Charges= mongoose.Schema({
  chargeName : {
        type : String,
        required : true,
        
    },
  freightForword: {
        type : Number,
        required : false,
        default:0
    },
  landTransporter : {
        type : Number,
        required : false,
        default:0
    },
 stam: {
    type : Number,
    required : false,
    default:0
},

logistics: {
    type : Number,
    required : false,
    default:0
},
ChamberOfCommerce: {
    type : Number,
    required : false,
    default:0
},
FactoryCutting: {
    type : Number,
    required : false,
    default:0
},
FactoryBuffing: {
    type : Number,
    required : false,
    default:0
},
transporter: {
    type : Number,
    required : false,
    default:0
},
  date: {
    type: Date,
    default: Date.now(),
  },
  otherCharge: {
    type : Number,
    required : false,
    default:0
},
achatDuProduit: {
  type : Number,
  required : false,
  default:0
},
total: {
  type : Number,
  required : false,
  default:0
},



})
module.exports = mongoose.model('charges',Charges)