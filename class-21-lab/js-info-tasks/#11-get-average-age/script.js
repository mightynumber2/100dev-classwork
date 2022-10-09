///////////////////////////////////////
// GET AVERAGE AGE

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = users => users.reduce((total, item) => total + item.age, 0) / users.length
console.log(getAverageAge(arr))