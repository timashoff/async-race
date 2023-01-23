import { Car } from '../utils/types';
import { createCarSVG } from '../utils/create-svg';
import { createBtn } from '../utils/create-buttons';
import { createDiv } from '../utils/create-divs';

export const createCar = (obj: Car) => {
  const { name, color, id } = obj;

  const car = createDiv('car');
  car.id = id;

  const carHead = createDiv('car-head');

  const carName = document.createElement('h3');
  carName.classList.add('car-name');
  carName.innerText = name;


  const selectBtn = createBtn('btn-round', 'select');
  selectBtn.innerText = '✓';
  selectBtn.addEventListener('click', () => alert(carName.innerText)); //заглушка


  const removeBtn = createBtn('btn-round', 'remove');
  removeBtn.innerText = '✘';
  removeBtn.addEventListener('click', () => car.remove());

  carHead.append(selectBtn, removeBtn, carName);

  const carMain = createDiv('car-main');

  const svg = createCarSVG(id, color);
  carMain.appendChild(svg);

  const road = createDiv('car-road');

  const engine = createDiv('engine');

  const startBtn = createBtn('btn-engine', 'start');
  startBtn.innerText = 'start';
  const stopBtn = createBtn('btn-engine', 'stop');
  stopBtn.innerText = 'stop';
  engine.append(startBtn, stopBtn);

  car.append(carHead, carMain, road, engine);
  return car;
};
