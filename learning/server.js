//server

const express = require('express');
const app = express();
app.listen(3000);

app.use(express.json());

user={}


app.get('/',(req,res)=>{
    res.sendFile('/public/index.html',{root:__dirname})
    //res.json("Hi");
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.json({
        message:"Received",
        data : req.body
    })
})

app.get('/user',(req,res)=>{
    res.send(user);
})

app.post('/user',(req,res)=>{
user = req.body;
console.log(req.body)
res.send("Data Submitted")

})

app.patch('/user',(req,res)=>{
    user = {...user,...req.body}
    res.json(user)
})

app.delete('/user',(req,res)=>{
    user={}
    res.send("Deleted")
})

app.get('/user/:username',(req,res)=>{
    res.send(req.params.username);

    //user can go to localhost:3000/user/abhijeet, it is not possible to make route with all names
    //so we can retreive the route with req.params.username and search in db

})

app.get('/test',(req,res)=>{
    res.json(req.query)
    /*
    localhost:3000/test/?a=1&b=2 or localhost:3000/test?a=1&b=2
        {
           "a": "1",
           "b": "2"
        }
    */

    //can be used to retreive values for filtering
})
