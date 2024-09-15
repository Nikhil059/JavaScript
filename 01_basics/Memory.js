let myInstagramName = "nikhilmittal"
let anotherAccountName = myInstagramName
console.log(myInstagramName);
console.log(anotherAccountName);

anotherAccountName = "mrfitnikhil"
console.log(myInstagramName);
console.log(anotherAccountName);

//In case of stack memory(primitive data) JS gives us a copy which doesn't affest the original value

let userOne = {
    email : "nikhimital978@gmail.com"
}
let userTwo = userOne

console.log(userOne)
console.log(userTwo);

userTwo.email = "mrfitnikhil.com"

console.log(userOne)
console.log(userTwo);


