// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'Javascript is my favorite language';
sentence.endsWith('?') && alert(sentence);

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
const words = 'jr. dev dog cat jr. dev monkey jr. dev banana';
const newWords = words.replace(/jr. dev/g, 'software engineer');
// console.log(newWords); 

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
  const random = Math.random();
  if (random < .33)
  return 'rock';
  else if (random < .66)
  return 'paper';
  else
  return 'scissors'; 
}
// rockPaperScissors();
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRPS(choice) {
  const bot = rockPaperScissors();
  console.log(`YOU: ${choice}, BOT: ${bot}`)
  if (choice === 'rock' && bot === 'scissors' || choice === 'paper' && bot === 'rock' || choice === 'scissors' && bot === 'paper')
  console.log('YOU win!');
  else if (choice === bot)
  console.log('TIE--GO again');
  else
  console.log('BOT wins!')
}
playRPS('rock');

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playArray(arr) {
  arr.forEach(game => playRPS(game));
}
// playArray(['rock', 'scissors', 'paper']);