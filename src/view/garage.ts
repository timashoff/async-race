import { createMenu } from './menu';
import { createPageTitle } from './page-title';
import { createPagination } from './page-pagination';
import { createCars } from './cars';

export const createGarage = () => {
  const garage = document.createElement('div');
  garage.id = 'garage';
  garage.append(createMenu(), createPageTitle('garage', 4), createPagination(2, 3), createCars());
  return garage;
};