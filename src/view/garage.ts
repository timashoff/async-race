import { createMenu } from './menu';
import { createPageTitle } from './page-title';
import { createPagination } from './page-pagination';

export const createGarage = () => {
  const garage = document.createElement('div');
  garage.id = 'garage';
  garage.append(createMenu(), createPageTitle('garage', 4), createPagination(1, 2));
  return garage;
};