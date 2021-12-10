const jwtkey = 'jwt_key';
const  jwt= require("jsonwebtoken");
const login1= require("./login1");

module.exports = tokenVerification = (req, res, next) => {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      req.token = bearer[1];
      console.log('check1');
      jwt.verify(req.token,jwtkey,(err, authData) => {
        console.log('check2');
        if (err) {
          console.log('check3');
          res.json({ result: err });
        }
        else {
          console.log('check4');
          next();
        }
      })
    }
    else {
      console.log('check5');
      res.send('token not provided');
    }
  }
  