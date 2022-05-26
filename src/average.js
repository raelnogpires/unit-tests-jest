const average = (array) => {
  if (array === '') return undefined;
  if (array.length === 0) return undefined;

  let total = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (typeof (array[i]) !== 'number') {
      return undefined;
    }
    total += array[i];
  }

  let avrg = Math.round(total / array.length);
  return avrg;
};

module.exports = average;
