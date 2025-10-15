const accountId = 123456
let accountEmail = "rehan@email.com"
var accountPassword = "13579"
accountCity = "karachi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "rehaan@email.com"
accountPassword = "223344"
accountCity = "hydrabad"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
