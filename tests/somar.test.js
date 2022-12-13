const somar = require('../src/somar');

test('adds 1 + 2 to equal 3', () => {
  expect(somar(1, 2)).toBe(3);
});
