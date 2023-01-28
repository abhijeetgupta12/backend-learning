const abhi =async ()=>{

    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        },3000) // created a Promise that resolves after 3 sec
    })

    let mumbaiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 deg")
        },8000) // created a Promise that resolves after 8 sec
    })
    
    console.log("Fetching Delhi Weather ...")
    let dW = await delhiWeather; //takes 3 sec ... compiler waits
    console.log("Fetched Delhi Weather : "+dW)
    console.log("Fetching Mumbai Weather ...")
    let mW = await mumbaiWeather; //takes 8 sec ... compiler waits
    console.log("Fetched Mumbai Weather : "+mW)

}

const abhi1 = async ()=>{
    let tst = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second async Function")
        },5000) // created a Promise that resolves after 3 sec
    })

    let tst1 = await tst; // takes 3 sec
    console.log(tst1);
}


const finalfunc = ()=>{

    abhi()
    abhi1()
        
}

finalfunc()



//In the above code both async function starts together as abhi() and abhi1() do not wait
//abhi() completes in around 11sec
//abhi1() completes in around 5sec