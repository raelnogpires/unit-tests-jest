const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um parâmetro que não seja um número, a função `circle` retorne `undefined`', () => {
    expect(circle('a')).toBeUndefined();
  });
  it('Verifica se a função `circle` retorna um objeto', () => {
    const object = circle(1);
    expect(typeof object).toBe('object');
  });
  it('Verifica se o objeto retornado tem 3 propriedades', () => {
    expect(Object.entries(circle(1)).length).toBe(3);
    expect(Object.entries(circle(7)).length).toBe(3);
    expect(Object.entries(circle(3)).length).toBe(3);
  });
  it('Verifica se a função, quando não recebe nenhum parâmetro, retorna `undefined`', () => {
    expect(circle('')).toBeUndefined();
  });
  it('Verifica se a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2', () => {
    const test = circle(2);
    expect(test.circumference).toBeCloseTo(12.56);
  });
  it('Verifica se a função retorna, dentro de um objeto, a área correta para um círculo de raio 3', () => {
    const test = circle(3);
    expect(test.area).toBeCloseTo(28.26);
  });
  it('Verifica se a função retorna, dentro de um objeto, os dados corretos de um círculo de raio 3', () => {
    const test = circle(3);
    expect(test.radius).toBeCloseTo(3);
    expect(test.area).toBeCloseTo(28.26);
    expect(test.circumference).toBeCloseTo(18.84);
  });
});
