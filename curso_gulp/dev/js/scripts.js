let number = 4;
let numbers = [1,2,3,4,5,6];

let sum = numbers.reduce((a,b)=>a+b);

class Person{


    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    get name(){
        return this.name;
    }

    get age(){
        return this.age;
    }
}