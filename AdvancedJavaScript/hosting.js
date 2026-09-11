// Hosting


console.log(name); // undefined 
var name = "Alice";

console.log(age); // ReferenceError: Cannot access 'age' before initialization
 
// Temporally Dead Zone (TDZ) occurs when a variable is accessed before it is declared and initialized. In this case, 'age' is declared using 'let', which does not allow access before its declaration.
//TDZ start
let age = 25;
//TDZ end


