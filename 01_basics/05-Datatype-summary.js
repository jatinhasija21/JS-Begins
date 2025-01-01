// Data types = Primitive & Non-Primitive

// Primitive = String, Number, BigInt, Null, Boolean, Undefined, Symbol

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


// Non-Primitive(Reference type) = Array, Function, Object

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