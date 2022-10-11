///////////////////////////////////////
// FILTER UNIQUE ARRAY MEMBERS

const unique = arr => {
  mySet = new Set(arr)
  return Array.from(mySet);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings))