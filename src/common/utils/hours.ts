const defineLeftZero = (number: number) => (number < 10 ? "0" : "");

export const hours = [...new Array(24)].map(
  (value, index) => `${defineLeftZero(index)}${index}:00`
);
