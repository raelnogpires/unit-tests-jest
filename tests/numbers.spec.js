const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  });
  it('Verifica se a função `numbers` retorna `false` quando o array contém um número em formato string', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  });
  it('Verifica se a função `numbers` retorna `false` quando o array contém um elemento  string', () => {
    expect(numbers([1, 'a', 3])).toBeFalsy();
  });
  it('Verifica se a função `numbers` retorna `false` quando recebe um array vazio', () => {
    expect(numbers([' '])).toBeFalsy();
  });
});
