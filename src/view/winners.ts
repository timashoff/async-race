import { createPageTitle } from './page-title';
import { createPagination } from './page-pagination';
import { createTable } from './table';

export const createWinners = () => {
  const winners = document.createElement('div');
  winners.id = 'winners';
  winners.append(createPageTitle('winners', 3), createPagination(2, 2), createTable());
  winners.style.display = 'none';
  return winners;
};