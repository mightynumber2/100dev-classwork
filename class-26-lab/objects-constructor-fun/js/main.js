//Create a constructor with 4 properties and 3 methods
const Pizza = function(toppings, crust, cheese, size) {
  this.toppings = toppings
  this.crust = crust
  this.cheese = cheese
  this.size = size
  this.fold = function() {
    console.log('FOLDING slice...')
  }
  this.microwave = function() {
    console.log('Microwaving...')
  }
  this.toss = function() {
    console.log('TOSSING pizza!')
  }
  };
  
  const hawaiianPizza = new Pizza(['ham', 'pineapple'], 'deep-dish', true,'large');
  
  Pizza.prototype.sauce = 'spicy-red';

  console.log(hawaiianPizza);