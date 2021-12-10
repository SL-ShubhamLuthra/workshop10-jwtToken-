const dbConnect = require('./connectwithmongoose');
const dbSchema = require('./signup_schema');
const model = require('./signup_model');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const jwtkey='jwt_key';

const app = express();


app.use(express.json());

app.post('/signup', async (req, res) => {
  try {
    const salt=await bcrypt.genSalt();
    const hashPswrd = await bcrypt.hash(req.body.password,salt);
 

    let data = new model({
      name: req.body.name,
      login_id: req.body.login_id,
      password: hashPswrd,
      designation: req.body.designation
    })
      
      let result = await data.save();
      jwt.sign({result},jwtkey,{expiresIn:'8h'},(err,token)=>{res.status(201).json({token})})
      
      
  }
  catch { res.status(500).send() }

});

app.listen(3000);