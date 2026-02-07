// console.log("Hare Krishna")

// // let , const 

// const userMassage = " Hare Krsna "
// console.log(userMassage) 

// let userId = 12
// console.log(userId)
// console.log("Hare" + "krsna")

// // data types : strings , number , boolean , null , undefined and objects
// // operators 

// console.log(10/5) // + , - , * , % , / everything works 
// if("10" == 10) console.log(userId) // == checks only value
//if( 10 === 10) console.log(userId) // === checks the value and data type both 

//     Functions 

// function greetUser(name){
//  // can be used multiple time
//   console.log("Hare krsna " + name )
// } 

// greetUser("deb")
// greetUser("dhruv")

// // writting the same function using arrows

// const greetUserWithArrows = (name) =>{
//     console.log("Hare krsna " + name )
// }

// greetUser("deb")
// greetUser("dhruv")

// function greet(name) {
//   return `Hello, ${name}!`;
// }

// const greetArrow = (name) => `Hello, ${name}!`;

// Classes and Objects 

class Account {
    // taking the details of the object 
    constructor(_name , _age ="NA"){  // default age = NA
          this.name = _name
          this.age = _age
    }
    // function inside a class 
    greet(){
        console.log("Hare krsna " + this.name)
    }
}

// creating an object of the class
const user1 = new Account("Deb")
const user2 = new Account("Dhruv" , 25)

console.log(user1.name) // Deb
console.log(user1.age) // NA
user1.greet() // Hare krsna Deb

console.log(user2.name) // Dhruv
console.log(user2.age) // 25
user2.greet() // Hare krsna Dhruv

// creating another class for a different type of object
class Product {
    constructor(_name , _price){
        this.name = _name
        this.price = _price
    }
    displayDetails(){
        console.log(`Product: ${this.name}, Price: ${this.price}`)
    }
}

const product1 = new Product("Laptop" , 1000)
const product2 = new Product("Phone" , 500)

console.log(product1.name) // Laptop
console.log(product1.price) // 1000
product1.displayDetails() // Product: this.name , Price: this.price

// creating object without using class
const user3 = {
    // Object 
    name : "Nitai" ,
    age : 30 ,
    friendName : "Gauranga" ,
    greet() {
        console.log("Hare krsna " + this.name)
    }
}

console.log(user3.name) // Nitai
console.log(user3.age) // 30
console.log(user3.friendName) // Gauranga
user3.greet() // Hare krsna Nitai


