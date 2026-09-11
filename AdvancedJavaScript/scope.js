// Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

let age = 20; // Global variable
function logAge() {
    console.log(age); // Accessing global variable inside a function
}

logAge(); // Output: 20


// Function Scope: Variables declared within a function are only accessible within that function.

function logName() {
    let name = "John"; // Function-scoped variable
    console.log(name); // Accessing function-scoped variable
}

logName(); // Output: John



// Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement or a loop) are only accessible within that block.
if (true) {
    let x = 10;
    let y = 20;
    console.log(x);
    console.log(y);
}
