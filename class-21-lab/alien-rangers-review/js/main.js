//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['Highlander', 'Monk', 'The Bachelor', 'Friends'];
tvShows.forEach(show => console.log(show));
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numbers = [100, 8, 15, 20, 11, 11, 13, 14, 60];
/* let newNums = [];
numbers.forEach(number => {
 if (number % 2 === 0)
  newNums.push(number);
}) */
const onlyEvens = arr => arr.filter(num => num % 2 === 0);
console.log(onlyEvens(numbers));
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

const sumLowHigh = arr => {
  arr.sort((a,b) => a - b); 
  alert(arr[1] + arr[arr.length -2]);
}
sumLowHigh(numbers);