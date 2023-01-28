

// const display= () => setTimeout(()=> console.log("Hey its 5 sec"),5000);
// display()


const prom1 = new Promise((resolve,reject)=>{

    let arr =[];
    setTimeout(()=>{
        arr =[1,2,3,4,5];
        resolve(arr);
        reject("Rejected")
    },3000)
    console.log(arr[1]); //this will be undefined as arr[1] will get value after 3 sec
    
})

const prom2 =(value)=> {
    
    return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                const a = arr[] 
            },3000) 
})
}

const myFunc = async ()=>{
    const pro = await prom1;
    console.log(pro);
}

myFunc()


/*create a Promise to complete a task which require some time, after the task is completed
call the Promise using async method*/