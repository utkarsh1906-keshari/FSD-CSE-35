// Closure = A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to remember and access variables from its outer scope even after the outer function has finished executing.



function outer(){
    let counter = 0;


    function inner(){
        counter++;
        console.log(counter);
    }

    return inner;

    
}

const increment = outer();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
