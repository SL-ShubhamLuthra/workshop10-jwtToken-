const mongoose = require("mongoose");
const dbSchema=require('./login_schema');
const dbConnect=require('./connectwithmongoose');


module.exports=mongoose.model('emp_logins',dbSchema);
