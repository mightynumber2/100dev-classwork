document.querySelector('#pumpkin').addEventListener('click', zeroThePumpkin);
document.querySelector('#dominosPizza').addEventListener('click', addThreePizza);
document.querySelector('#zebra').addEventListener('click', addNineZebras);
document.querySelector('#cantThinkOfAnything').addEventListener('click', minusTwoOfEverything);
document.querySelector('#bangImportant').addEventListener('click', bangImportant);

let result = 0;
function showResult() {
  document.querySelector('#placeToPutResult').innerText = result;
};

function zeroThePumpkin() {
  result = 0;
  showResult();
};
function addThreePizza() {
  result += 3;
  showResult();
};
function addNineZebras() {
  result += 9;
  showResult();
}
function minusTwoOfEverything() {
  result -= 2;
  showResult();
}
function bangImportant() {
  result += 1000;
  showResult();
}