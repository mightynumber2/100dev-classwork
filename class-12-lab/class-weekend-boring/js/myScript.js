document.getElementById('check').onclick = checkDay;

const showMessage = message => document.querySelector('#placeToSee').innerText = message; 

function checkDay() {
  const day = document.querySelector('#day').value.toLowerCase();
  if (day === 'tuesday' || day === 'thursday') {
    showMessage('👊 GO GET!');
  } else if (day === 'sunday') { 
    showMessage('🎉 Weekend');
  } else if (day === 'saturday') {
    showMessage('✝ Sabbath... Rest');
  } else {
    showMessage('💤 Boooring...');
  }
};