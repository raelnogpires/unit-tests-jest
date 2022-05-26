const createStudent = (name) => {
  let object = {
    name,
    feedback: () => 'Eita pessoa boa!',
  };
  return object;
};

module.exports = createStudent;
