"use strict";
// // class is the blueprint of objects
// class House{
//     numberOfRooms :number = 4
//     numberOfBathrooms :number = 1
// }
// // way to make objetcs from class 
// let house1 = new House()
// console.log(house1.numberOfRooms) // only print number of rooms
// // we only access property of an object by placig arrow
//  // task
//  class Person{
//     name:string
//     age:number
//     gender:string
//     constructor(name:string,age:number,gender:string){
//         this.name= name
//         this.age = age
//         this.gender = gender
//         console.log(`${this.name} can walk and eat`)
//     }
//  }
// let person1 = new Person("Maheen",18,"Female")
// person1.age = 5
// console.log(person1)
// // this itself is an object and self made and its value is the properties and method of this class
// // if i add readonly before property of name or anything so it canot update outside the class
// class Person1{
//     name:string
//     age:number
//     readonly gender:string
//     constructor(name:string,age:number,gender:string){
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
// }
// let person2 = new Person1("Maheen",18,"Female")
// // person2.gender = "male"  error
// console.log(person2)
// inhertance is the things which we inhert from our decends
// class Person{
//     name:string
//     age!:number // means initially t is undefined but in future its value become updated
//     constructor(name:string){
//         this.name=name
//     }
// }
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Teacher extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
}
let student1 = new Student("Maheen", 18, "maheen12345");
console.log(student1);
