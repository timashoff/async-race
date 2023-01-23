import { Title } from '../utils/types';

export const createPageTitle = (pageName: Title, count: number) => {
  let title: HTMLElement | null = document.querySelector('.title');
  if (!title) {
    title = document.createElement('h1');
    title.classList.add('title');
  }
  title.textContent = `${pageName}: ${count}`;
  return title;
};

