const accountId = 12345;
let accountName = "SGIT";
var accountcity = "Jaipur";
accountholder = "Shivam";

//const can't be change

accountName = "SSS"
accountcity = "Bengaluru";
accountholder = "Ayush"

// prefer not to use var as its scope is global and can impact others data
//we should use let as it scope is within the block only.

console.log([accountName,accountcity,accountholder]);

