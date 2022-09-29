// *Variables*
// Declare a variable, assign it a value, and alert the value
/* let twelvePack = 12;
alert(twelvePack); */
// Create a variable, divide it by 10, and console log the value
/* let twentyPack = 20;
twentyPack /= 10;
console.log(twentyPack); */
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
/* function multi3NumsAndAlert(num1, num2, num3) {
  alert(num1 * num2 * num3)
}
multi3NumsAndAlert(3, 3, 3); */
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
/* Function add2Sub2(num1, num2, num3, num4) { 
console.log((num1 + num2) - num3 - num4)
}
add2Sub2(2, 2, 5, 4); */
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// function checkWinna3(num1, num2, num3) {
//   const value = ((100 + num1) - num2) / num3;
//   if (value > 25)
//     console.log('WE HAVE A WINNNA');
// }
// checkWinna3(50, 5, 5);
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
/* function checkDayOfWeek(day) {
  day = day.toLowerCase();
  if (day === 'sunday' || day === 'saturday') { 
    alert('weekend');
  } else if (day !== 'monday' && day !== 'tuesday' && day !== 'wednesday' && day !== 'thurdsay' && day !== 'friday') { 
    alert('Try again!');
  } else {
    alert("week day");
  }
}
checkDayOfWeek('Friday'); */
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loopBy3(max) {
  for (let i = 1; i <= max; i+=3) {
    console.log(i);
  }
}
loopBy3(25);