// *Variables*
// Create a variable and console log the value
const fName = 'Dan';
console.log(fName);
// Create a variable, add 10 to it, and alert the value
let age = 31;
age += 10;
console.log(age);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNums(num1, num2, num3, num4) {
  let total = num1 - num2 - num3 - num4;
  alert(total);
}
subtractFourNums(20, 5, 4, 3);
// Create a function that divides one number by another and returns the remainder
function divide2Nums(num1, num2) {
  return num1 % num2;
}
console.log(divide2Nums(8, 4));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumJumanji(num1, num2) {
  sum = num1 + num2
  sum > 50 ? alert('Jumanji! 🐘') : alert(sum)
}
sumJumanji(46, 5)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply3Nums(num1, num2, num3) {
  total = num1 * num2 * num3
  total % 3 === 0 ? alert('🦓ZEBRA') : alert('Not divisible by 3')
}
multiply3Nums(10, 2, 6)