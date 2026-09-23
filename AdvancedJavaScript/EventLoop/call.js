const student1 ={
    name: "Utkarsh Keshari"

};

const student2 ={
    name: "Vansh Saxena"
};

function introduction(city){
    console.log(`my name is ${this.name} and and I live in ${city} `)
}

introduction.call(student1 , `baburi`)
