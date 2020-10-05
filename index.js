const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

const {User} = require('./model/user');


mongoose.connect(config.mongoURI,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
    ()=> console.log('DB connected'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register', (req, res)=>{
  const user = new User(req.body);

  user.save((err, userData)=>{
    if (err) return res.json({succes: false, err});
    return res.status(200).json({
      succes: true,
    });
  });
});

app.listen('5000');
