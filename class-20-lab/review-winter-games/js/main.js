//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function getEvensFromArr(arr) {
let evens = [];
arr.forEach(x => {
  if (x % 2 === 0) 
    evens.push(x); 
})
return evens;
}

console.log(getEvensFromArr([1, 2, 3, 4, 5 ,6]));