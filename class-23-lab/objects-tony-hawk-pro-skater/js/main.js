//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function Skater(gender, boardBrand, size, skillLevel) {
  this.gender = gender
  this.boardBrand = boardBrand
  this.size = size
  this.skillLevel = skillLevel
  this.flip = function() {
    console.log('FLIP IT!');
  }

  this.ollie = function() {
    console.log('Do an ollie!!!');
  }

  this.speedUp = function() {
    console.log('Going faster!');
  }
}

const tonyHawk = new Skater('male', 'Hawk\'s Brand', 'medium', 'master');

console.log(tonyHawk);

