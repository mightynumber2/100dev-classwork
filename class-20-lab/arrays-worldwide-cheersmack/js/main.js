//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function arrayFromNum(num) {
  let newArr = new Array();

  for (let i = 1; i <= num; i++) {
  newArr.push(i);
  }
return newArr;
}
console.log(arrayFromNum(10));