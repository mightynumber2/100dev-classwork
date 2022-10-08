// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let day = 'christmas';
// console.log(day = day.toUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
const myWay = "Be like water, my friend";
// alert(myWay.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNumsFrom100(num1, num2, num3, num4, num5) { alert(Math.abs((num1 + num2 + num3 + num4 + num5) - 100));
}
// fiveNumsFrom100(27, 83, 42, 1, 5);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestHighest(num1, num2, num3) {
  const min = Math.min(num1, num2, num3);
  const max = Math.max(num1, num2, num3);
  console.log(`min: ${min}, max: ${max}`);
}
// lowestHighest(5, 1000, 20);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
  const roll = Math.random();
  if (roll > .5) {
    return 'heads';
  }
    return 'tails';
}
// console.log(headsOrTails());
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flips(num) {
  let i = 1;
  while (i <= num) {
    console.log(headsOrTails());
    i++
  }
}
flips(10);