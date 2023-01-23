import './css/style.css';
// import { getCars } from './api/api';
// import { Cars } from './utils/types';
// import { createCars } from './view/cars';
import { createHeader } from './view/header';
import { createFooter } from './view/footer';
import { createGarage } from './view/garage';


// const garagePage = document.getElementById('garage');
// const winnersPage = document.getElementById('winners');
const cars = document.querySelector('.cars');

//buttons
// const generateBtn = document.querySelector('.generate-cars');

// const toWinersBtn = document.querySelector('.to-winners');
// const toGarageBtn = document.querySelector('.to-garage');
const resetBtn = document.querySelector('.reset');

//handlers
// function handleWinnersBtn() {
//   if (!garagePage || !winnersPage) return;
//   garagePage.style.display = 'none';
//   winnersPage.style.display = 'flex';
// }

// function handleGarageBtn() {
//   if (!garagePage || !winnersPage) return;
//   garagePage.style.display = 'flex';
//   winnersPage.style.display = 'none';
// }




//listiners
// if (toWinersBtn) toWinersBtn.addEventListener('click', handleWinnersBtn);
// if (toGarageBtn) toGarageBtn.addEventListener('click', handleGarageBtn);

// generateBtn?.addEventListener('click', async () => {
//   console.log('generate++');
//   const dataCars = await getCars();
//   dataCars.forEach((car: Cars) => cars?.append(createCars(car)));
// });

resetBtn?.addEventListener('click', () => {
  if (cars) cars.innerHTML = '';
});


function App() {
  const body = document.body;
  const main = document.createElement('main');
  main.append(createGarage());
  body.append(createHeader(), main, createFooter());
}

window.addEventListener('DOMContentLoaded', App);
