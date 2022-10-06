// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'kimchi';
favFood = 'Fried Chicken';
// alert(favFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const string = 'Friend, chicken';
// alert(string[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function div2MultLast(num1, num2, num3) {
alert((num1 / num2) * num3); 
}
// console.log(div2MultLast(4, 2, 5));

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num1) {
console.log(Math.cbrt(num1).toFixed(4));
}
// cubeRoot(100);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
/* function checkSummer(month) {
  month = month.toLowerCase();
  month === 'june' || month === 'july' || month === 'august' ? alert('YAY') : alert('Booo')
} */

function checkSummer(month) {
  const summer = ['june', 'july', 'august'];

  summer.includes(month.toLowerCase()) ? alert('YAY') : alert('Booo');
}
checkSummer('august');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function multiples(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) 
    continue;
    console.log(i);
  }
}
// multiples(20);