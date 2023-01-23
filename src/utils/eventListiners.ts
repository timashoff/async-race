import { Car } from './types';
import { getCars } from '../api/api';
import { createCar } from '../view/car';

export const gotoPage = (event: Event) => {
  const element = event.target; //as HTMLElement;
  if (!(element instanceof HTMLElement)) return;
  console.log(element);
  const garagePage = document.getElementById('garage');
  const winnersPage = document.getElementById('winners');
  if (garagePage && winnersPage) {
    if (element.classList.contains('to-winners')) {
      garagePage.style.display = 'none';
      winnersPage.style.display = 'flex';
    } else {
      garagePage.style.display = 'flex';
      winnersPage.style.display = 'none';
    }
  }
};

export const renderCars = async () => {
  const dataCars = await getCars();
  const cars = document.querySelector('.cars');
  dataCars.forEach((car: Car) => cars?.append(createCar(car)));
};


