//Create an array of movie titles. Loop through the array and each element to the h2.
const myMovies = ['The Mummy', 'Forrest Gump', 'Rocky'];

myMovies.forEach((x, i) => document.querySelector('h2').textContent += x + " ");

/* for (let i = 0; i < myMovies.length; i++) {
  document.querySelector('h2').textContent += myMovies[i];
} */

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const numArr = [7, 8, 9, 10];

/* for (let i = 0; i < numArr.length; i++) {
   numArr[i] += 3;
}
console.log(numArr); // 10, 11, 12, 13 */

numArr.forEach((num, i) => numArr[i] = num + 3);
console.log(numArr);

//Find the average of all the numbers from question three
let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }

  // numArr.forEach((num, i) => sum += num);

console.log(sum / numArr.length);
