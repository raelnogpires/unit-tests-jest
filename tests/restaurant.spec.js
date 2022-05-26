const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se o retorno da função `createMenu` é um objeto que possui a chave fetchMenu, a qual tem como valor uma função', () => {
    let objetoRetornado = createMenu();
    expect(objetoRetornado).toHaveProperty('fetchMenu');
    expect(typeof objetoRetornado.fetchMenu).toBe('function');
  });
  it('Verifica se o `objetoRetornado.fetchMenu()` retorna um objeto cujas chaves são somente `food` e `drink` considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`', () => {
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toStrictEqual({ food: {}, drink: {} });
  });
  it('Verifica se o menu passado para função `createMenu` é identico ao menu recuperado pela função `objetoRetornado.fetchMenu`', () => {
    objetoRetornado = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).fetchMenu();
    expect(objetoRetornado).toMatchObject({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
  })

  it('Verifica se o `objetoRetornado.consumption`, após a criação do menu, retorna um array vazio.', () => {
    objetoRetornado = createMenu({ food: {}, drink: {} });
    expect(objetoRetornado.consumption).toStrictEqual([]);
  });

  it('Verifica se ao chamar uma função associada à chave `order` no objeto retornado passando uma string como parâmetro (como `objetoRetornado.order(`coxinha`)`) tal string é adicionada ao array retornado em `objetoRetornado.consumption`', () => {
    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toStrictEqual(['coxinha']);
  });

  it('Verifica se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos', () => {
    objetoRetornado.order('agua');
    objetoRetornado.order('sopa');
    objetoRetornado.order('sashimi');
    expect(objetoRetornado.consumption).toStrictEqual(['coxinha', 'agua', 'sopa', 'sashimi']);
  });

  it('Verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
    let objetoOrder = createMenu({ food: {}, drink: {} });
    objetoOrder.order('coxinha');
    objetoOrder.order('agua');
    objetoOrder.order('coxinha');
    expect(objetoOrder.consumption).toStrictEqual(['coxinha', 'agua', 'coxinha']);
  });

  it('Verifica se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
    const priceMenu = createMenu({food: {'coxinha': 4.00, 'sanduiche': 10.00}, drink: {'agua': 4.00, 'cerveja': 7.00}});
    priceMenu.order('coxinha');
    priceMenu.order('agua');
    priceMenu.order('coxinha');
    expect(priceMenu.pay()).toBeCloseTo(13.20);
  });
});
