
export const createDiv = (...classes: string[]) => {
  const div = document.createElement('div');
  div.classList.add(...classes);
  return div;
};