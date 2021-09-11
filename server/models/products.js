const mongoose = require('mongoose');

const Products= mongoose.Schema({
  name : {
        type : String,
        required : true
    },
  refrence : {
        type : String,
        required : true
    },
  unitPrice : {
        type : Number,
        required : true
    },
    incomingQuantity : {
        type : Number,
        required : false,
        default:0
    },
    alertQuantity : {
      type : Number,
      required : false,
      default:0
  },
  image: {
    type : String,
    required : false,
    
},
})
module.exports = mongoose.model('products',Products)