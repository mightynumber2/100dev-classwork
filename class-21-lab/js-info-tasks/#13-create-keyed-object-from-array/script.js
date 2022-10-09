///////////////////////////////////////
// CREATE KEYED OBJECT FROM ARRAY

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

const usersById = array => array.reduce((obj, value) => {
  obj[value.id] = value
  return obj
}, {})

// console.log(usersById(users))
usersById(users)