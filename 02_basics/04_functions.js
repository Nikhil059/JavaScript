function myname(){
    console.log("nikhil");  
}

myname()



function justLoggedIn(username)
{
    return `${username} just logged in`
}

console.log(justLoggedIn("Nikhil"))



// function calculateCartPrice(num1)
// {
//     return num1
// }

// console.log(calculateCartPrice(200));

//rest operator
function calculateCartPrice(val1,val2,...num1)
{
    return num1
}
console.log(calculateCartPrice(200,300,400,500));


//passing object as a parameter
const user = {
    username : "Nikhil Mittal",
    Age : 25
}
// console.log(details(user))
console.log({
    username : "Nikhil Mittal",
    Age : 25
})

function details(anydetail)
{
    return `Username is ${anydetail.username} and age is ${anydetail.Age}`
}
 
