
export const createBtn = (...classes: string[]) => {
  const button = document.createElement('button');
  button.classList.add(...classes);
  return button;
};