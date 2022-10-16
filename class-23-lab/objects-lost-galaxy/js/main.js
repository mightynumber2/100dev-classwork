//Create a dog object that has four properties and three methods

const dog = {};

dog.color = 'brown';
dog.size = 'medium';
dog.breed = 'old english';
dog.tail = 'nub';
dog.fart = function() {
  console.log('BBBBBbbbbraaap!')
};
dog.sniff = function() {
  console.log('SNIFF! sniff!')
};
dog.bark = function() {
  console.log('Bbbbbbaaaaaaaarooooooooo!')
};

console.log(dog);
