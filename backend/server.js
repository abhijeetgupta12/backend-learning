
const express = require('express');  //introduces express module in the file (npm install express)
const app = express(); //create an object of express module
app.use(express.json()); //converts JSON data into JavaScript Objects

require('./secure/db_connectivity') //connecting DB

const cookieParser = require('cookie-parser');
app.use(cookieParser());

 
app.listen(3000,(err)=>{
    if(!err)
    console.log('Port is Connected ...');
    else
    console.log('Port not Connected ...');
});


const userRouter = require('./router/userRouter');
app.use('/user',userRouter);