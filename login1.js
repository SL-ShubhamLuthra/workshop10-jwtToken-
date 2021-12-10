const dbConnect = require('./connectwithmongoose');
const dbSchema = require('./login_schema');
const login_model = require('./login_model');
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt');
const tokenVerification=require('./middleware');
const jwt = require('jsonwebtoken');
const jwtkey = 'jwt_key';
const app = express();

app.use(express.json());

app.post('/login', async (req, res) => {


  let data = await login_model.find({ login_id: req.body.login_id });
  console.log(data);

  if (data == null) {

    return res.status(400).send("user not find");
  }

  try {
    if (await bcrypt.compare(req.body.password, data[0].password)) {
      jwt.sign({ data }, jwtkey, { expiresIn: '50000s' }, (err, token) => { res.status(200).json({ token }) })
    }
    else {

      res.send('not success');

    }
  }
  catch (err) {
    console.log(err);
    res.status(500).send()
  }

});

app.get('/empdetail', tokenVerification,async (req, res) => {

  let data = await login_model.find({});
  res.status(200).json({alluser:data});
  console.log({data});
  

});


app.listen(3000);