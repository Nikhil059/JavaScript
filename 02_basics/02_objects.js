const sym = Symbol("Key1")

const obj = {
    "full name" : "Nikhil Mittal",
    [sym] : "xyz", //this is how symbol is used in objects
    age : 25,
    email : "nikhilmital978@gmail.com",
    PlacesVisited : ["Kareri","Dehradun","Rajasthan"]
}

console.log(obj["full name"]); //another way to access the object values and the most preferred ones
console.log(obj.PlacesVisited);
console.log(obj.email)
console.log(obj[sym]);
console.log(obj);

//we can also change the value of object
obj.email = "nikhilmital978@accenture.com"
console.log(obj["email"]);
//we can also freeze(then we can't change the value) the Object

// Object.freeze(obj);
obj.email = "nikhilmital978@globallogic.com"
console.log(obj["email"]);


//functions
obj.greeting = function(){
    console.log("Hello Object creator");
}

obj.greeting2 = function(){
    console.log(`Hello Object creator, ${this["full name"]}`)
}
console.log(obj.greeting());
console.log(obj.greeting2());






const myObj = {
    username : {
        userfullname : {
            firstname : "Nikhil",
            lastname : "Mittal"
        }
    },
    email : "aman@google.com"
}

// console.log(myObj.username.userfullname.firstname)
console.log(myObj["username"]["userfullname"]["firstname"]);


const obj1 = {1:"a",
    2 : "b"
}
const obj2 = {3:"c",
    4 : "d"
}

// const obj3 = {obj1, obj2}
//to join two objects
const obj4 = Object.assign(obj1,obj2)
const obj5 = Object.assign({},obj1,obj2)
//we can use any one of the above to join the objects but it is a good practice to use obj5 way
console.log(obj4);

// we can also use the spread operator way

const obj6 = {...obj1,...obj2} //we mostly use this one same as we use in arrays
console.log(obj6)


console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj));



