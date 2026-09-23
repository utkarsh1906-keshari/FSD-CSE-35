// const promise =new Promise((resolve , reject)=>{
//     let success=true;

//     if(success){
//         resolve("operation successfull");
//     }
//     else{
//         reject("operation failed");
//     }
// });

// promise.then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// });


//----------------------------------------------------------------------------

// Promise chain

function step1(){
    return Promise.resolve(10);
}

step1().then(result=>{
    console.log("step 1" , result);
    return result+10;
}).then(result=>{
    console.log("step 2",result);
    return result+10;
}).then(result=>{
    console.log("step 3",result);
}).catch(error=>{
    console.log("Error" , error);
});