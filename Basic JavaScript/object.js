class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

display(){
    console.log(`Name: ${this.name}` );
    console.log(`Age: ${this.age}`);
}

let student1 = new student("John", 20);
student1.display();