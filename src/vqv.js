const vqv = (name, age) => {
  if (name === '' || age === '') return undefined;

  const phrase = `Oi, meu nome é ${name}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

  if (typeof (name) === 'string' && typeof (age) === 'number') return phrase;
};

module.exports = vqv;
