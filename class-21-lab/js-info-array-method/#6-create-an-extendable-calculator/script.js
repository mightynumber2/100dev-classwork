///////////////////////////////////////
// CREATE AN EXTENDABLE CALCULATOR

/* function Calculator() {

  this.methods = {
    '+': (a, b) => a + b, 
    '-': (a, b) => a - b, 
  };

  this.calculate = function(str) {
    const split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b))
    return NaN;
    else return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func; 
  }
};
// const cal = new Calculator();
// console.log(cal.calculate('2 + 2'));

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a,b) => a * b);
powerCalc.addMethod('/', (a,b) => a / b);
powerCalc.addMethod('**', (a,b) => a ** b);

// console.log(powerCalc.methods);
console.log(powerCalc.calculate('8 / 4')); */

// 2nd attempt
function Calculator() {

  this.methods = {
    '+': (a, b) => a + b,  
    '-': (a, b) => a - b,  
  };

  this.calculate = function(str) {
    const split = str.split(" ");
    a = +split[0];
    op = split[1];
    b = +split[2];
    
    if (!this.methods[op] || isNaN(a) || isNaN(b)) 
    return NaN 
    else return this.methods[op](a, b); 
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

const calc = new Calculator;
console.log(calc.calculate('3 + 3'));

const powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

console.log(powerCalc.methods);
console.log(powerCalc.calculate('2 * 4'));
console.log(powerCalc.calculate('4 / 2'));
console.log(powerCalc.calculate('4 ** 2'));