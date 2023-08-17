export const getPercentageValues = (valueOne: number, valueTwo: number) => {
  const expression = (valueOne / valueTwo) * 100;
  return `${expression}%`;
};
