const subtracao = require('./subtracao');

test('subtrai 14 - 2 to equal 12', () => {
  expect(subtracao(14, 2)).toBe(12);
});