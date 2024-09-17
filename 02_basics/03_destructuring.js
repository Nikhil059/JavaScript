//Objects Destructuring
 const obj = {
    course : "JS in hindi",
    By : "Hitesh Chaudhary",
    source : "Youtube"
 }

 console.log (obj.source);

 //I want to print source 1000 times, SO instead of writing obj.source 1000 times we can use destructuring

// const {source} = obj;
// console.log(source);

//if we want to change the name of source by anything like "from" we can simply do

const {source : from} = obj;
console.log(from);



