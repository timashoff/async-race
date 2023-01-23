
export const createTD = (args: string[]) => {
  return args.map(e => {
    const td = document.createElement('td');
    td.textContent = e;
    return td;
  });
};
