// let add = (a, b) => a + b;

// console.log(add(7, 20));

// let doubleIt = num => num * 2;
//      let moreThen = num > 100 ? ' less then 100' : ' more than 100';

   
// console.log(doubleIt(50));
class Parents {
    constructor() {
    this.fatherName = "Khan"
    }
}
class Child extends Parents {
    constructor(name){
        super();
        this.name = name;
    }
     getName() {    
        return this.name + " " + this.fatherName;
    }
}


const baby = new Child('Salman');
const baby1 = new Child('Amir');
console.log(baby.getName());
console.log(baby1.getName());