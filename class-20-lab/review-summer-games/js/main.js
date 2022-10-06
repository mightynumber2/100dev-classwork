//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multiply(arr) {
let product = 1;
arr.forEach(num => product *= num)
alert(product);
}
multiply([2, 2, 2, 2, 2]);