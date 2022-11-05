const plDeck = document.getElementById('player1')
const p2Deck = document.getElementById('player2')
const winText = document.getElementById('winner')
const p1ScoreText = document.getElementById('p1Score')
const p2ScoreText = document.getElementById('p2Score')
let p1Score = 0;
let p2Score = 0;

let deckID;

// Open a new deck
document.querySelector('#deck').onclick = function() {
  const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

  // Empty the player card images
  plDeck.src = ''
  p2Deck.src = ''
  winText.textContent = ''
  p1ScoreText.textContent = ''
  p2ScoreText.textContent = ''

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      deckID = data.deck_id;
    })
    .catch(err => console.log(`err ${err}`))
};

// Draw a card for each player
document.querySelector('#draw').onclick = function() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      plDeck.src = data.cards[0].image;
      p2Deck.src = data.cards[1].image;

      const p1Card = checkCard(data.cards[0].value)
      const p2Card = checkCard(data.cards[1].value)

      if (p1Card > p2Card) {
        winText.textContent = 'Player 1 Scores!'
        p1Score++;
        p1ScoreText.textContent = ': ' + p1Score + ' pts';
      } else if (p1Card < p2Card) {
          winText.textContent = 'Player 2 Scores!'
          p2Score++;
          p2ScoreText.textContent = ': ' + p2Score + ' pts';
        
      } else {
          winText.textContent = 'We go to WAR!'
      }
      
    })
    .catch(err => console.log(`err ${err}`))
};

function checkCard(card) {
  if (card === 'ACE')
    return card = 14
  else if (card === 'KING')
    return card = 13
  else if (card === 'QUEEN')
    return card = 12
  else if (card === 'JACK')
    return card = 11
  else
    return +card
}