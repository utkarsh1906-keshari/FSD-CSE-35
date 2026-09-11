function sums(a, b) {
    return a + b;
}

console.log(sums(5,10));

// default parameter

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet("Alice")); 
console.log(greet("Bob", "Hi"));  

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 10)); // Output: 50

//-----------------------------------------------------------------------


// callback function example

function display(result){
    console.log(result);
}

function cal(a,b,callback){
    callback(a+b);
}

cal(5,10,display); // Output: 15

//------------------------------------------------------------------------


// set timeout example = time set krne ke liye use hota hai
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);


// set interval example = ek particular interval ke baad ye message display hoga loop me 
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`This message is displayed every 2 seconds. Count: ${count}`);
    if(count === 5){
        clearInterval(intervalId);
    }
}, 2000);

//------------------------------------------------------------------------



