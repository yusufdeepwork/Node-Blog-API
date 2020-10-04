const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://node-rest-api:'+process.env.MONGO_ATLAS_PW+'@node-rest-api.oskjp.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
    ()=> console.log('DB connected'));


app.get('/', (req, res)=> {
  res.send('hello world,I have started my new project.');
});


app.listen('5000');
