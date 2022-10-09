///////////////////////////////////////
// FILTER RANGE

let arr = [5, 3, 8, 1];

const filtered = (arr, a, b) => arr.filter(num => num >= a && num <= b);
console.log(filtered(arr, 1, 4));
