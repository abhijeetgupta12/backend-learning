const port = 3000;
const domain = 'localhost';

const http = require('http');
const fs =   require('fs');


const server = http.createServer((req,res)=>{  //once the request id made this is called
    console.log(req.method)
    console.log(req.url);

    let path ='./';
    switch(req.url){
        
        case '/':
        case '/index.html':    
            path+='index.html';
            break;
        case '/about.html':
            path+='about.html';
            break;
        default :
            path+='404.html';    
            break;
    }
    
    console.log(path);
    res.setHeader('Content-Type','text/html');  //'text/plain' for plain text
    fs.readFile(path,(err,fileData)=>{
        if(err){
            console.log(err);
        }else{
            res.write(fileData);
            res.end();
        }
    })
})

server.listen(port,domain,()=>{
    console.log('Server is up and listening')  //when the node file is made to run 'listen' function is called with 3 parameters
})