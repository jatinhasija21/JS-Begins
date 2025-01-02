const name = "jatin"
const surname = " hasija"

// console.log(name + surname + " available this side") // Prefer not to use... this method is known as primitive

console.log(`My name is ${name} and my surname is ${surname}`)

// Second way of declare string in js.
// Modern way of using string in js this method is also known as object string.

const gameName = new String("GodHand On")

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(6))
console.log(gameName.indexOf("d"))
console.log(gameName.substring(0, 3))
console.log(gameName.slice(-9, 3))
console.log(gameName.includes('God'))
console.log(gameName.split(' '))

const anotherString = "   jatin   "
console.log(anotherString)
console.log(anotherString.trim())

const url = "https://jatin.com/jatin%20hasija"
console.log(url.replace('%20', '-'))
