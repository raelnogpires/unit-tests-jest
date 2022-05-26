const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Verifica se a função `productDetails` retorna um array', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
  });
  it('Verifica se o array retornado contém dois itens dentro', () => {
    const length = productDetails('Alcool gel', 'Máscara').length;
    expect(length).toBe(2);
  })
  it('Verifica se os dois itens retornados dentro do array são objetos', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
  });
  it('Verifica se quando passados parâmetros diferentes entre si, os dois objetos também são diferentes', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toMatchObject(productDetails('Alcool gel', 'Máscara')[1]);
  });
  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toStrictEqual(expect.stringMatching('123'));
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toStrictEqual(expect.stringMatching('123'));
  });
});
