// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
const numbers = [7, 2, 3, 4, 5, 6];

function compareArr(arr) {
  if (arr[0] === arr[arr.length -1]) {
    alert('We close in an hour');
  } else if (arr[0] < arr[arr.length -1]){
    alert('Hi');
  } else {
    alert('Bye');
  }
} 
compareArr(numbers);
