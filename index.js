const hello= ()=>console.log('I am first');
const timer=()=>{setTimeout(()=>console.log("I'm second but I printed as fourth since I am pushed to event loop"),1000)
new Promise((resolve,reject)=>{
    resolve('I am resolved before timer')
}).then( 
    res=>console.log(res)
)
};
const hi =()=>console.log("I'm Third")
const makepromise= ()=>{
  
}

hello()
timer()
hi()

