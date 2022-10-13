//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(gender, fightStyle, belt, country) {
  this.gender = gender,
  this.fightStyle = fightStyle,
  this.belt = belt,
  this.country = country,
  this.attack = function() {
    alert(`${this.fightstyle} attack!`)
  }
  this.dodge = function() {
    alert('dodge!')
  }
  this.jumpAttack = function() {
    alert(`jump ATTACK from ${this.country}!`)
  }
}

const chunLi = new StreetFighter('female', 'gungFu', 'blue', 'China');

StreetFighter.prototype.specialMove = true;

console.log(chunLi.jumpAttack());
