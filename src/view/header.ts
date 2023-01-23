import { createBtn } from '../utils/create-buttons';
import { gotoPage } from '../utils/eventListiners';


export const createHeader = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');

  const garage = createBtn('btn', 'to-garage');
  garage.textContent = 'garage';
  garage.addEventListener('click', (event) => gotoPage(event));

  const winners = createBtn('btn', 'to-winners');
  winners.textContent = 'winners';
  winners.addEventListener('click', (event) => gotoPage(event));

  header.append(nav);
  nav.append(garage, winners);
  return header;
};

