document.getElementById('purple').onclick = purpleRain;
document.getElementById('green').onclick = greenDay;
document.getElementById('blue').onclick = blueManGroup;
document.getElementById('red').onclick = redPowerRanger;
document.getElementById('reset').onclick = reset;

// Refactoring code with arrow functions
const background = color => document.querySelector('body').style.background = color;

const color = color => document.querySelector('body').style.color = color;

function purpleRain() {
  background('rgba(241,63,247,1)');
  color('white');
}
function greenDay() {
  background('rgba(0,253,81,1)');
  color('white');
}
function blueManGroup() {
  background('rgba(0,254,255)');
  color('white');
}
function redPowerRanger() {
  background('red');
  color('white');
}
function reset() {
  background('white');
  color('black');
}