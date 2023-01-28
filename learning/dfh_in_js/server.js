const fs = require('fs'); //core modules are in-built in node.js

//creates new file with the content 
//if file name exists it overwrites the contenet
fs.writeFileSync('dummy.txt','Hi this is a dummy file ');

//to append data in existing file
fs.appendFileSync('dummy.txt','This line will be appended');

//to read a file
const data = fs.readFileSync('dummy.txt').toString();
                //OR
const data1 = fs.readFileSync('dummy.txt',"utf8"); //--> encoding/decoding concept
console.log(data);
console.log(data1);

//rename a file
//parameter - old file name, new file name
fs.renameSync('dummy.txt','new_dummy.txt');
 
//will create directory in the same loaction as server.js
fs.mkdirSync('abhi');
//remove directory
fs.rmdirSync('abhi');

//will delete file
fs.unlinkSync('abhi/bio.txt');

fs.writeFileSync('abhi/bio.txt','My bio');
fs.writeFileSync('/src/bio.txt','hi');


//-------------------------------------------------------

//using asynchronous methods need a callback function
//call function is called after the method does it work
//err is displayed if method doesn't work
//you ca display some useful methods 
fs.writeFile('async.txt','Hi',(err)=>{console.log(err)});

//read take two parameter
fs.readFile('async.txt','UTF-8',(err,data) => {console.log(data);});



/*synchronous methods does not allow the interpreter to move to next instruction
unless the method completes its work on the other hand in asynchronous methods the 
interpreter after initiating the method moves to the next instruction. Any instruction 
dependent on method is written in callback function, this saves time and make code more effective*/

