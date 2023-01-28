//Promises are promise of code execution.
//If Promise is taking time it is in 'Pending' state.
//If Promise is either rejected or resolved it is in 'Fullfilled' state.

let p1 = new Promise((resolve,reject)=>{
    console.log('Promise pending ...');
    setTimeout(()=>{
        resolve("Resolved")
    },5000)
    
})

let p2 = new Promise((resolve,reject)=>{
    console.log('Promise pending ...');
    setTimeout(()=>{
        reject(new Error("Rejected"))
    },5000)
   
})


p1.then((value)=>{
    console.log(value);
}).catch(e=>{
    console.log('Error');
})


p2.then((value)=>{
     console.log(value);
 }).catch(e=>{             //here we handled the error so we didn't see error in console
    console.log('Error');
 })



 /*Practically we do not make the Promise object. We call a function which returns a 
 Promise Object either resolved or rejected*/