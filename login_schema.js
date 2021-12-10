const mongoose=require('mongoose');
const dbConnect=require('./connectwithmongoose');

module.exports= dbSchema=new mongoose.Schema({
    login_id:String,
    password:String
});

