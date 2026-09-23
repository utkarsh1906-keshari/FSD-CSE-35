function first(){
    console.log("First");
    // second();
    third();
}

function second(){
    console.log("Second");
    // third();
}

function third(){
    console.log("Third");

    second();
}

first();