document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if (day === 'thursday' || day === 'tuesday') {
    alert("Awesome day!");
  } else if (day === 'saturday' || day === 'sunday') {
    alert("Weekend");
  } else {
    alert("Boring day!");
  }
};

// Homework: remove case sensitivity for day input 
// show result on the page
