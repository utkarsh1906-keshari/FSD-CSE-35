// this : reference to the object where this is used 


const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    // sayHello: function(){console.log(`Hi! I am ${name}`)},
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}

};

person1.eat();
function showName(){
    console.log(this.name);}

    showName();


