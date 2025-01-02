// Data types = Primitive & Non-Primitive

// Primitive: String, Number, BigInt, Null, Boolean, Undefined, Symbol = Cannot change it's original value 

// string
const name = "jatin"

// number
const scorevalue = 100.3

// bigInt
const bigNumber = 8676688838535363737n

// null
const outsideTemp = null

// boolean
const isLoggedIn = false

// undefined
let Email;

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)


// Non-Primitive(Reference type): Array, Function, Object = It change it's original value 

// array
const Heros = ["IronMan", "CaptainAmerica", "SpiderMan"]

// object
let myobj = {
    name: "jatin",
    age: 20
}

// function
const myFunction = function(){
    console.log("Hello World")
}

// ======================================================================================

// Memory = Stack (Primitive), Heap (Non-Primitive)

let myYoutube = "jatinhasija"
let anothername = myYoutube

anothername = "codewithjatin"

console.log(myYoutube, anothername)


let user1 = {
    Email: "user1@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.Email = "user2@gmail.com"

console.log(user1.Email, user2.Email)