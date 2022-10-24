//Create a pizza object that has four properties and three methods

const pizza = {};

pizza.toppings = ['pepperoni', 'mushrooms'];
pizza.crust = 'regular';
pizza.cheese = true;
pizza.size = 'extra-large';
pizza.fold = function() {
  console.log('FOLDING slice...');
};
pizza.microwave = function() {
  console.log('Microwaving...');
};
pizza.toss = function() {
  console.log('TOSSING pizza!');
};

console.log(pizza);
