//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function haltSnacks() {
  let numOfSnacks = document.querySelector('input').value;
  document.querySelector('#stops').textContent = '';
  for (let i = 1; i <= numOfSnacks; i++) {
    document.querySelector('#stops').textContent += ' HALT!';
  }
}

document.querySelector('#help').onclick = haltSnacks;
