
export const createInput = (...classes: string[]) => {
  const input = document.createElement('input');
  input.classList.add(...classes);
  return input;
};