import './css/style.css';
import { getCars } from './api/api';
import { Cars } from './utils/types';
import { createCars } from './utils/create-cars';



const garagePage = document.getElementById('garage');
const winnersPage = document.getElementById('winners');
const generateBtn = document.querySelector('.generate-cars');

const cars = document.querySelector('.cars');

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



generateBtn?.addEventListener('click', async () => {
  const dataCars = await getCars();
  dataCars.forEach((car: Cars) => cars?.append(createCars(car)));
});

