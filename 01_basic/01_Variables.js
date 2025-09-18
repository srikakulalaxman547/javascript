const accountId=112233
let accountMail="laxman@gmail.com"
var accountPassword="12345"
accountCity = "jaipur" // not allowed 

// accountId=3
let accountState;
accountMail="l@gmail.com"
accountPassword="125"
accountCity = "Bengaluru"

/*
prefer not to use var 
because of block scope or funtional scope
*/

console.log(accountId);
console.table([accountId,accountMail,accountPassword,accountCity,accountState])

