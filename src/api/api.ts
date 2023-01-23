
const baseURL = 'http://127.0.0.1:3000';

const endPoints = {
  garage: `${baseURL}/garage`,
  winners: `${baseURL}/winners`,
  engine: `${baseURL}/engine`,
} as const;

export const getCars = async () => {
  const response = await fetch(endPoints.garage);
  return response.json();
};
