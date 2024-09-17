const myArr = [1,2,3,4,5];
const myHeros = ["Shaktiman", "Power-Ranger"];
const myArr2 = new Array(1,2,"Pokemon")

// console.log(typeof myArr);
// console.log(typeof myHeros);
// console.log(typeof myArr2);
// console.log(myArr);

// myArr2.push("Pokemon");
// myArr2.pop();

// console.log(myArr2);

// myArr2.unshift(0); -> add the value at 0 index
// myArr2.shift("Pokemon"); -> remove the element from 0 index
const newArr = myArr2.join(); // join method convert our array to string
// console.log(myArr2)
// console.log(newArr);
// console.log(typeof newArr);





const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,0]

//array1.push(array2) // this line push array2 in array1 as an object
// console.log(array1); 


const newArray = array1.concat(array2);
console.log(newArray);



const another_array = [1,2,3,4,[5,6,7,8],"Raju",["Kuldeep","Himanshu",["Bittu","Shruti"]]]
console.log(another_array);
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


