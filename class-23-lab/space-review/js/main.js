//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [2, 2, 2, 2,];
alert( numbers.reduce((total, next) => total + next) );

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareIt(arr) {
  return arr.map(num => num ** 2);
}
console.log(squareIt(numbers));

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str) {
  return str.split('').reverse().join('');
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(str) {
  console.log(reverseStr(str));
  str === reverseStr(str) ? console.log(true) : console.log(false); 
}

isPalindrome('eye');
