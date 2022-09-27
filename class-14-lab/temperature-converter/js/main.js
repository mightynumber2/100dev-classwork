//Write your pseduo code first! 

// on button click
document.getElementById('check').onclick = convertToF;

// convert temp from celsius to farenheit using a function
function convertToF() {
  // get temp in celsius
  let tempInput = document.getElementById('temp').value;
  tempInput = (tempInput * 9/5) + 32;
  // show converted temp in dom
  document.getElementById('placeToSee').textContent = tempInput + '*F';
}


