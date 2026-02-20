
const accountId = 12345
let accountEmail = "ka@gmail.com"
var accountPassword = "3345"
accountCity = "delhi"
let accountState;

// accountId = 2 not allowed

accountEmail = "kii@gmail,com"
accountPassword = "44444"
accountCity = "goa"


console.log(accountId);

console.table([accountEmail, accountId , accountPassword , accountCity , accountState])

/*
prefer not to use var because of issue in block scope and functional scope
*/