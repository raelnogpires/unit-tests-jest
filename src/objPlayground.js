const calculator = (number1, number2) => {
  const obj = {
    sum: Math.round(number1 + number2),
    mult: Math.round(number1 * number2),
    div: Math.floor(number1 / number2),
    sub: Math.round(number1 - number2),
  };
  return obj;
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') return Object.keys(object);
  if (type === 'values') return Object.values(object);
  if (type === 'entries') return Object.entries(object);
};

module.exports = { calculator, arrayGenerator };
