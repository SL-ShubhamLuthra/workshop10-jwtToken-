const mongoose=require('mongoose');
const dbConnect=require('./connectwithmongoose');

module.exports= dbSchema=new mongoose.Schema({
    name:String,
    login_id:String,
    password:String,
    designation:String
});

