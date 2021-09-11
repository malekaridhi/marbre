const mongoose = require('mongoose');

const Clients= mongoose.Schema({
  name : {
        type : String,
        required : true
    },
  lastname : {
        type : String,
        required : true
    },
  adress : {
        type : String,
        required : true
    },
 companyName : {
    type : String,
    required : true
}
   
})
module.exports = mongoose.model('clients',Clients)