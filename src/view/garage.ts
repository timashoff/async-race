import { createMenu } from './menu';

export const createGarage = () => {
  const garage = document.createElement('div');
  garage.id = 'garage';
  garage.append(createMenu());
  return garage;
};