// *Variables*
// Create a variable and console log the value
let fName = 'Dan';
console.log(fName);
// Create a variable, add 10 to it, and alert the value
let age = 31;
age += 10;
alert(age);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract4Nums(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}
subtract4Nums(10, 1, 1, 1);
// Create a function that divides one number by another and returns the remainder
function divide2Nums(num1, num2) {
  return num1 % num2;
}
console.log(divide2Nums(5, 4));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNumsForJumanji(num1, num2) {
  if (num1 + num2 > 50) 
  alert('Juamnji!'); 
}
addTwoNumsForJumanji(25, 55);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mult3Nums(num1, num2, num3) {
  if ((num1 * num2 * num3) % 3 === 0)
  alert('ZEBRA');
}
mult3Nums(1, 1, 1);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function calcWordNum(word, num) {
  for (let i = 1; i <= num; i++) {
    console.log(word);
  }
}
calcWordNum('Super', 8);
