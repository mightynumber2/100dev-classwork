//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [5, 5, 5, 5, 5];
const sumNums = numbers.reduce((prev, next) => prev + next)
console.log(sumNums);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squaredNums = numbers.map(item => item ** 2);
console.log(squaredNums);

//Create a function that takes string
//Print the reverse of that string to the console
const reverseStr = str => {
  const reversedStr = str.split('')
                          .reverse()
                          .join('')
  console.log(reversedStr);
}
reverseStr('Hello');

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const checkPalindrome = str => {
  str == str.split('')
                          .reverse()
                          .join('') ? 
  console.log(true) : console.log(false);
}
checkPalindrome('eye');