type RandomInteger = (min: number, max: number) => number;

export const randomInteger: RandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
