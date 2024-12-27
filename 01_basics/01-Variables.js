const accountId = 2234
let accountEmail = "jatinhasija2@gmail.com"
var accountPassword = "0389"

// Prefer to not use var
// because of issues in block scope and function scope

accountState = "Haryana"

let accountCity;

console.log(accountId)

console.table({accountEmail, accountPassword, accountState, accountCity});
