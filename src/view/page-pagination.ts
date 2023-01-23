import { createBtn } from '../utils/create-buttons';
import { createDiv } from '../utils/create-divs';

export const createPagination = (firstPage: number, lastPage: number) => {

  if (firstPage > lastPage) return '';
  if (firstPage === 1 && lastPage === 1) return '';

  const pagination = createDiv('pagination');

  const prev = createBtn('prev');
  prev.textContent = '◀';
  if (firstPage === 1) prev.disabled = true;

  const next = createBtn('next');
  next.textContent = '▶';
  if (firstPage === lastPage) next.disabled = true;

  const pageCounter = document.createElement('span');
  pageCounter.classList.add('page-counter');
  pageCounter.textContent = lastPage > 1 ? `${firstPage}/${lastPage}` : `${lastPage}`;

  pagination.append(prev, pageCounter, next);
  return pagination;
};