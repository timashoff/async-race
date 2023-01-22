import { createBtn } from '../utils/create-buttons';
import { createDiv } from '../utils/create-divs';
import { createInput } from '../utils/create-input';

export const createMenu = () => {
  const menu = createDiv('menu');

  const create = createDiv('create-car');
  const inputCreatText = createInput('create-text');
  inputCreatText.type = 'text';
  inputCreatText.placeholder = 'new name';
  const inputCreatColor = createInput('create-color');
  inputCreatColor.type = 'color';
  inputCreatColor.value = '#D25656';
  //inputCreatColor.name = 'create-color'
  const createCarBtn = createBtn('create-btn');
  createCarBtn.textContent = 'create';
  create.append(inputCreatText, inputCreatColor, createCarBtn);

  const update = createDiv('update-car');
  const inputUpdateText = createInput('update-text');
  inputUpdateText.type = 'text';
  inputUpdateText.placeholder = 'update name';
  const inputUpdateColor = createInput('create-color');
  inputUpdateColor.type = 'color';
  inputUpdateColor.value = '#00BBFA';
  //inputUpdateColor.name = 'update-color'
  const updateCarBtn = createBtn('update-btn');
  updateCarBtn.textContent = 'update';
  updateCarBtn.disabled = true;
  update.append(inputUpdateText, inputUpdateColor, updateCarBtn);

  const controls = createDiv('controls');
  const race = createBtn('race');
  race.textContent = 'race';
  const reset = createBtn('reset');
  reset.textContent = 'reset';
  reset.disabled = true;
  const generate = createBtn('generate-cars');
  generate.textContent = 'generate cars';
  controls.append(race, reset, generate);

  menu.append(create, update, controls);
  return menu;
};