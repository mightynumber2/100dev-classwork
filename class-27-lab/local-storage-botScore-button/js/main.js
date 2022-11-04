//Create a button that adds 1 to a botScore stored in localStorage 

let score = document.querySelector('h3')

document.querySelector('#add').onclick = function() {
  if (!localStorage.getItem('botScore')) {
    localStorage.setItem('botScore', 0)
  }

  let localBotScore = +localStorage.getItem('botScore')
  localBotScore += 1;
  localStorage.setItem('botScore', localBotScore)
  score.textContent = localBotScore;
};

document.querySelector('#reset').onclick = function() {
  localStorage.clear();
  score.textContent = 'Score';
};
