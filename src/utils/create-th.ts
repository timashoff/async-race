
export const createTH = (args: string[]) => {
  return args.map(e => {
    const th = document.createElement('th');
    th.textContent = e;
    return th;
  });
};
