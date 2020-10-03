const express = require('express');
const app = express();


app.get('/',(req,res)=> {
    res.send('hello world,I have started my new project.')
})


app.listen('5000');