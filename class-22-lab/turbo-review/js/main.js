// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drink = '  coke  '.trim();
console.log(drink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = 'dog cat french apple';
/* words.includes('apple') ? console.log(true) : console.log(false);  */
console.log(words.indexOf('apple'));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissor() {
  const randomNum = (Math.random());
  if (randomNum < 0.33) 
  return ('ROCK!');
  else if (randomNum < 0.66)
  return ('PAPER!');
  else return ('SCISSOR!');
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const myResult = rockPaperScissor();

const didYouWin = myResult => {
  let botResult = rockPaperScissor();

  console.log(`You: ${myResult} vs bot: ${botResult}`);
  
  if (myResult === 'PAPER!' && botResult === 'ROCK!' || myResult === 'SCISSOR!' && botResult === 'PAPER!' || myResult === 'ROCK!' && botResult === 'SCISSOR!') 
  console.log('👌 YOU Win!')
  else if (myResult === botResult) 
  console.log('Tie! Go again...')
  else console.log('⛔ BOT Wins!')
}
// didYouWin(myResult);

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let myChoices = ['ROCK!', 'PAPER!', 'SCISSOR!'];
const playX_Times = arr => arr.forEach(item => didYouWin(item))
playX_Times(myChoices);