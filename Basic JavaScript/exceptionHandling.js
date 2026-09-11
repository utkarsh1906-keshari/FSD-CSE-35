// Exception handling in JavaScript is a mechanism to handle runtime errors and exceptions that may occur during the execution of a program. It allows developers to gracefully manage errors and prevent the application from crashing. The primary constructs used for exception handling in JavaScript are `try`, `catch`, `finally`, and `throw`.

// try , catch , finally , and throw are used to handle exceptions in JavaScript. The try block contains the code that may throw an exception, the catch block contains the code to handle the exception, and the finally block contains code that will always execute regardless of whether an exception was thrown or not. The throw statement is used to create custom exceptions.
// Example of exception handling in JavaScript:
try {
    // Code that might throw an error
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
} finally {
    // Code that will always execute
    console.log("Execution completed.");
}



// costom error handling in JavaScript can be achieved by creating your own error objects and throwing them when certain conditions are met. This allows you to provide more specific error messages and handle errors in a way that is tailored to your application's needs. You can create a custom error by extending the built-in Error class or by simply creating an object with a message property.
// Example of custom error handling in JavaScript:

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    validateAge(15);
} catch (error) {
    console.log(error.message);
}