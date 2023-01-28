const express = require('express');
//Express is a small framework that sits on top of Node.js’s 
//web server functionality to simplify its APIs and add helpful new features

const app = express();

app.listen(3000,(err)=>{
    if(!err)
        console.log('Connected');
    else
        console.log('Not Connected');    
})


const router = express.Router();
app.use('/',router);

router
.route('/auth')
.post(method1)
.get(method2)

const method1 = (req,res) =>{
    //localhost:3000/auth  --> will be hit with some body content (req.body) 
    //hit mostly from Postman or axios method as data is attached with request
    //data flow --> browser to server
}

const method2 = (req,res) =>{
    //localhost:3000/auth  --> will be hit to get data
    //data flow --> server to browser
}


//to run --> node project_structure.js --> from terminal