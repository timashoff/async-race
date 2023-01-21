const baseURL = 'http://127.0.0.1:3000/';

const endPoints = {
  engine: 'engine',
  garage: 'garage',
  winners: 'winners',
} as const;

export const getCars = async () => {
  const response = await fetch(`${baseURL}${endPoints.garage}`);
  return response.json();
};
