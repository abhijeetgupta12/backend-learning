const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('Middleware called');
    next();
});


app.get('/home',(req,res,next)=>{
    console.log('/home get also called 1');
    res.send('Hi');
    //next(); --> if this is uncommented it calls the next middleware (app.get())
})

app.get('/home',(req,res)=>{//if next() is called above code flow comes here
    console.log('/home get also called 2');
    res.send('Hi');//if next() is called above this will throw error bcz we already have a res.send() in the code flow
})

app.post('/home',(req,res)=>{
    console.log('/home post also called');
})

app.listen(4000,()=>{
    console.log('Port Connected');
})

/*
app.use() runs for all the request (get,post,patch,delete) if path is not set 
app.get() --> runs only for get request if the path is hit
app.post() --> runs only for post request if the path is hit

The app.use() function is used to mount the specified middleware function(s) at 
the path which is being specified. It is mostly used to set up middleware for your application.

It can take pre-defined middleware functions like - express.json() or you
can create a custom middleware function. The function will have 3 parameters
req,res,next . next() - will call the next middleware function depending on the sequesnce of code.
predefined middleware functions automatically calls next()

in one complete flow of request from browser to response to browser there should only be 
one res.send() otherwise first 'res.send()' will be displayed on browser and the next 'res.send()'
will throw error

*/