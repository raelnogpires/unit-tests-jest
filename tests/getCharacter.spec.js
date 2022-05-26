const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter`, quando não recebe nenhum parâmetro, retorna `undefined`', () => {
    expect(getCharacter()).toBeUndefined;
  });
  it('Verifica se a função `getCharacter` retorna o objeto correto para o parâmetro `Arya`', () => {
    expect(getCharacter('Arya')).toStrictEqual({name: 'Arya Stark', class: 'Rogue', phrases: ['Not today', 'A girl has no name.']});
  });
  it('Verifica se a função `getCharacter` retorna o objeto correto para o parâmetro `Brienne`', () => {
    expect(getCharacter('Brienne')).toStrictEqual({name: 'Brienne Tarth', class: 'Knight', phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']});
  });
  it('Verifica se a função `getCharacter` retorna o objeto correto para o parâmetro `Melissandre`', () => {
    expect(getCharacter('Melissandre')).toStrictEqual({name: 'Melissandre', class: 'Necromancer', phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']});
  });
  it('Verifica se os parâmetros não são Case Sensitive', () => {
    expect(getCharacter('arya')).toStrictEqual({name: 'Arya Stark', class: 'Rogue', phrases: ['Not today', 'A girl has no name.']});
    expect(getCharacter('BRIENNE')).toStrictEqual({name: 'Brienne Tarth', class: 'Knight', phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']});
    expect(getCharacter('MeliSSANdrE')).toStrictEqual({name: 'Melissandre', class: 'Necromancer', phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']});
  });
  it('Verifica se ao passar um nome que não está na tabela, a função retorna `undefined`', () => {
    expect(getCharacter('Mikasa Ackerman')).toBeUndefined;
  });
});
