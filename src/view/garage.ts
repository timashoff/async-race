import { createMenu } from './menu';
import { createPageTitle } from './page-title';

export const createGarage = () => {
  const garage = document.createElement('div');
  garage.id = 'garage';
  garage.append(createMenu(), createPageTitle('garage', 4));
  return garage;
};