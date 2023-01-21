import './css/style.css';




const garagePage = document.getElementById('garage');
const winnersPage = document.getElementById('winners');

function handleWinnersBtn() {
  if (!garagePage || !winnersPage) return;
  garagePage.style.display = 'none';
  winnersPage.style.display = 'flex';
}

function handleGarageBtn() {
  if (!garagePage || !winnersPage) return;
  garagePage.style.display = 'flex';
  winnersPage.style.display = 'none';
}


const toWinersBtn = document.querySelector('.to-winners');
const toGarageBtn = document.querySelector('.to-garage');

if (toWinersBtn) {
  toWinersBtn.addEventListener('click', handleWinnersBtn);
}
if (toGarageBtn) {
  toGarageBtn.addEventListener('click', handleGarageBtn);
}




