import { createTH } from '../utils/create-th';

export const createTable = () => {
  const table = document.createElement('table');

  const createTableHead = () => {
    const tr = document.createElement('tr');
    tr.classList.add('table-head');
    const th = createTH(['rank', 'car', 'name', 'wins', 'best time']);
    tr.append(...th);
    return tr;
  };

  const arr = [
    ['1', 'car', 'volvo', '1', '2.7s'],
    ['2', 'car', 'tesla', '1', '3.6s'],
    ['3', 'car', 'bmw', '1', '3.9s'],
    ['4', 'car', 'ford', '1', '4.5s'],
    ['5', 'car', 'jeep', '1', '5.7s'],
  ]
  const createTableBody = (a: string[]) => {
    const tr = document.createElement('tr');
    const td = createTH(a);
    tr.append(...td);
    return tr;
  };

  const winners = (array: string[][]) => array.map(a => createTableBody(a))

  table.append(createTableHead(), ...winners(arr));
  return table;
};